'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { signUpWithEmail } from '@/firebase/auth/actions';
import { doc, setDoc } from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';
import { UserProfile } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

type Inputs = {
  name: string;
  email: string;
  password: string;
  role: 'client' | 'professional';
};

const defaultAvatar = 'https://avatar.vercel.sh/default.png';
const defaultBanner = 'https://picsum.photos/seed/default-banner/1500/300';

export default function RegisterClientPage() {
  const firestore = useFirestore();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ defaultValues: { role: 'client' } });
  const router = useRouter();
  const { toast } = useToast();
  const [authError, setAuthError] = useState<string | null>(null);
  const role = watch('role');

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!firestore) return;
    setAuthError(null);
    try {
      const userCredential = await signUpWithEmail(data.email, data.password);
      const user = userCredential.user;

      const newUserProfile: UserProfile = {
        id: user.uid,
        name: data.name,
        email: user.email!,
        role: data.role,
        createdAt: new Date().toISOString(),
        avatarUrl: `https://avatar.vercel.sh/${user.email!}.png`,
        bannerUrl: defaultBanner,
        ...(data.role === 'professional' && {
          professionalDetails: {
            specialty: 'Aún no especificado',
            bio: 'Bienvenido a mi perfil. ¡Pronto agregaré más detalles!',
            rating: 0,
            reviews: 0,
          },
        }),
      };
      
      const userDocRef = doc(firestore, 'users', user.uid);

      await setDoc(userDocRef, newUserProfile).catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: userDocRef.path,
          operation: 'create',
          requestResourceData: newUserProfile,
        });
        errorEmitter.emit('permission-error', permissionError);
        throw permissionError;
      });

      toast({
        title: '¡Registro exitoso!',
        description: 'Tu cuenta ha sido creada.',
      });
      router.push('/');
    } catch (error: any) {
      let errorMessage = 'Ocurrió un error inesperado.';
      if (error instanceof FirestorePermissionError) {
          errorMessage = 'No tienes permiso para crear este perfil.';
      } else {
        switch (error.code) {
            case 'auth/email-already-in-use':
              errorMessage = 'Este correo electrónico ya está en uso.';
              break;
            case 'auth/weak-password':
              errorMessage = 'La contraseña debe tener al menos 6 caracteres.';
              break;
            case 'auth/invalid-email':
                errorMessage = 'El correo electrónico no es válido.';
                break;
            default:
              errorMessage = 'Error en el registro. Por favor, inténtalo de nuevo.';
              break;
          }
      }
      setAuthError(errorMessage);
      toast({
        variant: 'destructive',
        title: 'Error de registro',
        description: errorMessage,
      });
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-foreground">
          Crea tu cuenta en Amatrix
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
            <CardHeader>
                 <CardTitle>Registro de Nuevo Usuario</CardTitle>
                <CardDescription>Completa el formulario para unirte a la red de élite.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <Label htmlFor="name">Nombre completo</Label>
                    <div className="mt-2">
                    <Input id="name" type="text" {...register('name', { required: 'El nombre es obligatorio' })} />
                    {errors.name && <p className="mt-2 text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                </div>

                <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <div className="mt-2">
                    <Input id="email" type="email" {...register('email', { required: 'El correo electrónico es obligatorio' })} />
                    {errors.email && <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                </div>

                <div>
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="mt-2">
                    <Input id="password" type="password" {...register('password', { required: 'La contraseña es obligatoria', minLength: { value: 6, message: 'La contraseña debe tener al menos 6 caracteres' } })} />
                    {errors.password && <p className="mt-2 text-sm text-destructive">{errors.password.message}</p>}
                    </div>
                </div>

                <div>
                    <Label>Tipo de cuenta</Label>
                    <RadioGroup
                    defaultValue="client"
                    className="mt-2 grid grid-cols-2 gap-4"
                    onValueChange={(value: 'client' | 'professional') => register('role').onChange({ target: { value } })}
                    >
                        <Label
                            htmlFor="client"
                            className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground ${role === 'client' ? 'border-primary' : ''}`}
                        >
                            <RadioGroupItem value="client" id="client" className="sr-only" />
                            <span>Cliente</span>
                            <span className="text-xs text-muted-foreground mt-1 text-center">Quiero contratar servicios.</span>
                        </Label>
                        <Label
                            htmlFor="professional"
                            className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground ${role === 'professional' ? 'border-primary' : ''}`}
                        >
                            <RadioGroupItem value="professional" id="professional" className="sr-only" />
                            <span>Profesional</span>
                             <span className="text-xs text-muted-foreground mt-1 text-center">Quiero ofrecer mis servicios.</span>
                        </Label>
                    </RadioGroup>
                </div>


                {authError && (
                    <p className="text-sm text-destructive text-center">{authError}</p>
                )}

                <div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Creando cuenta...' : 'Crear Cuenta'}
                    </Button>
                </div>
                </form>

                 <p className="mt-10 text-center text-sm text-muted-foreground">
                    ¿Ya tienes una cuenta?{' '}
                    <Link
                        href="/login"
                        className="font-semibold leading-6 text-primary hover:text-primary/90"
                    >
                        Inicia sesión
                    </Link>
                </p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
