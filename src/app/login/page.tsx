'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signInWithEmail } from '@/firebase/auth/actions';
import { useRouter } from 'next/navigation';

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
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { FirebaseError } from 'firebase/app';

const loginSchema = z.object({
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    setError(null);
    try {
      await signInWithEmail(data.email, data.password);
      toast({
        title: '¡Bienvenido de nuevo!',
        description: 'Has iniciado sesión correctamente.',
      });
      router.push('/');
    } catch (e: any) {
        let errorMessage = 'Ocurrió un error inesperado.';
        if (e instanceof FirebaseError) {
            switch (e.code) {
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                case 'auth/invalid-credential':
                    errorMessage = 'El correo electrónico o la contraseña son incorrectos.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'El formato del correo electrónico no es válido.';
                    break;
                default:
                    errorMessage = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.';
                    break;
            }
        }
      setError(errorMessage);
      toast({
        variant: 'destructive',
        title: 'Error de inicio de sesión',
        description: errorMessage,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
          <CardDescription>Accede a tu cuenta de Amatrix.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
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
              {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
            <p className="text-sm text-muted-foreground">
              ¿No tienes una cuenta?{' '}
              <Link href="/register" className="text-primary hover:underline">
                Regístrate
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
