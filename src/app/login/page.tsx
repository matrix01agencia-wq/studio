'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { useUser } from "@/firebase/auth/use-user";
import { signInWithEmail } from "@/firebase/auth/actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();
    const { user } = useUser();

    if (user) {
        router.push('/profile');
        return null;
    }

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await signInWithEmail(email, password);
            toast({
                title: "Inicio de sesión exitoso",
                description: "¡Bienvenido de nuevo a Amatrix!",
            });
            router.push('/profile');
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Error al iniciar sesión",
                description: error.message || "Por favor, revisa tus credenciales e intenta de nuevo.",
            });
        } finally {
            setIsLoading(false);
        }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <LogIn className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="text-3xl font-bold tracking-tighter mt-4">Accede a tu Cuenta</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Bienvenido de nuevo. Tu próximo gran proyecto te espera.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="tu@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" required placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full h-12 text-lg group" disabled={isLoading}>
              {isLoading ? 'Iniciando...' : 'Iniciar Sesión'} <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            ¿Aún no tienes una cuenta?{" "}
            <Link href="/register/client" className="font-medium text-primary hover:underline">
              Regístrate aquí
            </Link>
          </div>
           <div className="mt-2 text-center text-xs text-muted-foreground">
            <Link href="/support" className="underline hover:text-primary">
                ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
