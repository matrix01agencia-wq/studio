'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { signInWithEmail } from '@/firebase/auth/actions';

type Inputs = {
  email: string;
  password: string;
};

export default function RegisterClientPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const router = useRouter();
  const { toast } = useToast();
  const [authError, setAuthError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setAuthError(null);
    try {
      await signInWithEmail(data.email, data.password);
      toast({
        title: '¡Bienvenido de vuelta!',
        description: 'Has iniciado sesión correctamente.',
      });
      router.push('/');
    } catch (error: any) {
      let errorMessage = 'Ocurrió un error inesperado.';
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No se encontró ningún usuario con este correo.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'La contraseña es incorrecta. Inténtalo de nuevo.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'El formato del correo electrónico no es válido.';
          break;
        default:
          errorMessage = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.';
          break;
      }
      setAuthError(errorMessage);
       toast({
        variant: 'destructive',
        title: 'Error de inicio de sesión',
        description: errorMessage,
      });
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-foreground">
          Inicia sesión en tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Card>
            <CardHeader>
                <CardTitle>Acceso a la plataforma</CardTitle>
                <CardDescription>Usa tus credenciales para entrar al Nexus.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <div className="mt-2">
                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register('email', {
                        required: 'El correo electrónico es obligatorio',
                        })}
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-destructive">{errors.email.message}</p>
                    )}
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <Label htmlFor="password">Contraseña</Label>
                     <div className="text-sm">
                        <a href="#" className="font-semibold text-primary hover:text-primary/90">
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                    <Input
                        id="password"
                        type="password"
                        autoComplete="current-password"
                        {...register('password', {
                        required: 'La contraseña es obligatoria',
                        })}
                    />
                    {errors.password && (
                        <p className="mt-2 text-sm text-destructive">{errors.password.message}</p>
                    )}
                    </div>
                </div>

                {authError && (
                    <p className="text-sm text-destructive text-center">{authError}</p>
                )}

                <div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                    </Button>
                </div>
                </form>

                <p className="mt-10 text-center text-sm text-muted-foreground">
                ¿No eres miembro?{' '}
                <Link
                    href="/register"
                    className="font-semibold leading-6 text-primary hover:text-primary/90"
                >
                    Regístrate ahora
                </Link>
                </p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
