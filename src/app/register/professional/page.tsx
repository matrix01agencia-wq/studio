'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { signUpWithEmail } from "@/firebase/auth/actions";
import { useFirestore } from "@/firebase/provider";
import { doc, setDoc } from "firebase/firestore";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";
import { UserProfile } from "@/lib/types";


export default function RegisterProfessionalPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [specialty, setSpecialty] = useState('');
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
            });
            return;
        }
        if (!specialty) {
             toast({
                variant: "destructive",
                title: "Especialidad requerida",
                description: "Por favor, selecciona tu área de expertise.",
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
                role: 'professional',
                createdAt: new Date().toISOString(),
                avatarUrl: `https://avatar.vercel.sh/${user.email}.png`,
                bannerUrl: 'https://images.unsplash.com/photo-1512364615838-8088a04a778b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwY2l0eXxlbnwwfHx8fDE3Njc4Njk2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
                professionalDetails: {
                    specialty,
                    rating: 5, // Default rating
                    reviews: 0, // Starts with 0 reviews
                    bio: "Profesional de élite listo para transformar tus proyectos."
                }
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
                title: "¡Solicitud de registro enviada!",
                description: "Tu cuenta de profesional ha sido creada y está pendiente de verificación.",
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
    };


  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-lg shadow-2xl">
        <CardHeader className="text-center">
          <Briefcase className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="text-3xl font-bold tracking-tighter mt-4">Únete a la Élite de Amatrix</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Ofrece tus talentos a una red de clientes premium. Eleva tu carrera al siguiente nivel.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" placeholder="Ej: Ana Gómez" required value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@emailprofesional.com" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="specialty">Especialidad Principal</Label>
               <Select onValueChange={setSpecialty} value={specialty}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecciona tu área de expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital">Ecosistema Digital</SelectItem>
                  <SelectItem value="wellness">Bienestar & Educación</SelectItem>
                  <SelectItem value="entertainment">Entertainment Hub</SelectItem>
                  <SelectItem value="home-services">Servicios Físicos</SelectItem>
                  <SelectItem value="legal-financial">Asesoría Profesional</SelectItem>
                  <SelectItem value="creative-design">Creatividad y Diseño</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required placeholder="Mínimo 8 caracteres" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                    <Input id="confirm-password" type="password" required placeholder="Repite la contraseña" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                </div>
            </div>
            <Button type="submit" className="w-full h-12 text-lg group" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar Solicitud de Registro'} <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            ¿Ya eres parte de la élite?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Inicia Sesión Aquí
            </Link>
          </div>
           <div className="mt-2 text-center text-xs text-muted-foreground">
            El registro está sujeto a un proceso de verificación. Al enviar tu solicitud, aceptas nuestros{" "}
            <Link href="/support" className="underline hover:text-primary">Términos para Profesionales</Link>.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
