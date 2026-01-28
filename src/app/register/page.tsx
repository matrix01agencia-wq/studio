'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signUpWithEmail } from '@/firebase/auth/actions';
import { useRouter } from 'next/navigation';
import { useFirestore } from '@/firebase/provider';
import { doc, setDoc } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/lib/types';
import { FirebaseError } from 'firebase/app';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';


const registerSchema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
  role: z.enum(['client', 'professional'], { required_error: 'Debes seleccionar un rol.' }),
});

type RegisterSchema = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: 'client',
    },
  });
  
  const role = watch('role');

  const onSubmit: SubmitHandler<RegisterSchema> = async (data) => {
    if (!firestore) return;
    setError(null);
    try {
      const userCredential = await signUpWithEmail(data.email, data.password);
      const user = userCredential.user;

      const newUserProfile: UserProfile = {
        id: user.uid,
        name: data.name,
        email: data.email,
        role: data.role,
        createdAt: new Date().toISOString(),
        avatarUrl: `https://avatar.vercel.sh/${user.uid}.png`,
        bannerUrl: `https://picsum.photos/seed/${user.uid}/1200/300`,
      };

      if (data.role === 'professional') {
        newUserProfile.professionalDetails = {
            specialty: "Aún no especificado",
            bio: "Bienvenido a mi perfil. ¡Pronto agregaré más detalles!",
            rating: 0,
            reviews: 0,
        };
      }
      
      const userDocRef = doc(firestore, 'users', user.uid);

      setDoc(userDocRef, newUserProfile).catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: userDocRef.path,
          operation: 'create',
          requestResourceData: newUserProfile,
        });
        errorEmitter.emit('permission-error', permissionError);
      });

      toast({
        title: '¡Cuenta creada!',
        description: 'Bienvenido a Amatrix. Te hemos redirigido al inicio.',
      });
      router.push('/');
    } catch (e: any) {
        let errorMessage = 'Ocurrió un error inesperado.';
         if (e instanceof FirebaseError) {
            if (e.code === 'auth/email-already-in-use') {
                errorMessage = 'Este correo electrónico ya está en uso.';
            } else {
                errorMessage = 'Error al registrar la cuenta. Por favor, inténtalo de nuevo.';
            }
        }
      setError(errorMessage);
       toast({
        variant: 'destructive',
        title: 'Error de registro',
        description: errorMessage,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Crear una Cuenta</CardTitle>
          <CardDescription>Únete a la red de élite de Amatrix.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            
            <div className="space-y-2">
              <Label>¿Cómo te unes a Amatrix?</Label>
              <RadioGroup
                value={role}
                onValueChange={(value: 'client' | 'professional') => setValue('role', value)}
                className="grid grid-cols-2 gap-4"
              >
                <div>
                  <RadioGroupItem value="client" id="client" className="peer sr-only" />
                  <Label
                    htmlFor="client"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Busco un servicio
                  </Label>
                </div>
                <div>
                  <RadioGroupItem value="professional" id="professional" className="peer sr-only" />
                  <Label
                    htmlFor="professional"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    Ofrezco un servicio
                  </Label>
                </div>
              </RadioGroup>
               {errors.role && <p className="text-destructive text-sm">{errors.role.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input id="name" type="text" placeholder="Tu nombre" {...register('name')} />
              {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="tu@email.com" {...register('email')} />
              {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-destructive text-sm">{errors.password.message}</p>}
            </div>
             {error && <p className="text-destructive text-sm text-center">{error}</p>}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creando cuenta...' : 'Crear Cuenta'}
            </Button>
            <p className="text-sm text-muted-foreground">
              ¿Ya tienes una cuenta?{' '}
              <Link href="/login" className="text-primary hover:underline">
                Inicia sesión
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
