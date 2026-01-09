import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <LogIn className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="text-3xl font-bold tracking-tighter mt-4">Accede a tu Cuenta</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Bienvenido de nuevo. Tu próximo gran proyecto te espera.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="tu@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" required placeholder="Ingresa tu contraseña" />
            </div>
            <Button type="submit" className="w-full h-12 text-lg group">
              Iniciar Sesión <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
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
