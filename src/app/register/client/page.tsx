'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { signUpWithEmail } from "@/firebase/auth/actions";
import { useFirestore } from "@/firebase/provider";
import { doc, setDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { UserProfile } from "@/lib/types";

export default function RegisterClientPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();
    const firestore = useFirestore();

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast({
                variant: "destructive",
                title: "Las contraseñas no coinciden",
                description: "Por favor, verifica tu contraseña.",
            });
            return;
        }
        setIsLoading(true);
        try {
            const userCredential = await signUpWithEmail(email, password);
            const user = userCredential.user;

            const userProfile: UserProfile = {
                id: user.uid,
                name,
                email: user.email!,
                role: 'client',
                createdAt: new Date().toISOString(),
                avatarUrl: `https://avatar.vercel.sh/${user.email}.png`,
                bannerUrl: 'https://images.unsplash.com/photo-1512364615838-8088a04a778b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwY2l0eXxlbnwwfHx8fDE3Njc4Njk2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
            };
            
            const userDocRef = doc(firestore, 'users', user.uid);
            
            setDoc(userDocRef, userProfile).catch(async (serverError) => {
                const permissionError = new FirestorePermissionError({
                  path: userDocRef.path,
                  operation: 'create',
                  requestResourceData: userProfile,
                });
                errorEmitter.emit('permission-error', permissionError);
              });


            toast({
                title: "¡Registro exitoso!",
                description: "Tu cuenta de cliente ha sido creada.",
            });
            router.push('/profile');

        } catch (error: any) {
             toast({
                variant: "destructive",
                title: "Error en el registro",
                description: error.message || "No se pudo crear la cuenta. Inténtalo de nuevo.",
            });
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <UserPlus className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="text-3xl font-bold tracking-tighter mt-4">Crea tu Cuenta de Cliente</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Accede a un universo de servicios de élite. El éxito está a un clic.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input id="name" placeholder="Ej: Juan Pérez" required value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="tu@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" required placeholder="Crea una contraseña segura" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
              <Input id="confirm-password" type="password" required placeholder="Repite tu contraseña" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            <Button type="submit" className="w-full h-12 text-lg group" disabled={isLoading}>
              {isLoading ? 'Creando cuenta...' : 'Crear Mi Cuenta'} <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Inicia Sesión
            </Link>
          </div>
          <div className="mt-2 text-center text-xs text-muted-foreground">
            Al registrarte, aceptas nuestros{" "}
            <Link href="/support" className="underline hover:text-primary">Términos de Servicio</Link>.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
