'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Wallet, History, LogOut, Star, MessageSquare, Settings } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/firebase/auth/use-user";
import { signOutUser } from "@/firebase/auth/actions";
import { useRouter } from "next/navigation";
import { EditProfileDialog } from "@/components/features/edit-profile-dialog";

export default function ProfilePage() {
    const { user, profile, loading } = useUser();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOutUser();
        router.push('/');
    };

    if (loading) {
        return <div className="container mx-auto p-4 md:p-8">Cargando perfil...</div>
    }
    
    if (!user || !profile) {
        // This should be handled by middleware in a real app, redirecting to login.
        // For now, we'll just show a message.
        if (typeof window !== 'undefined') {
            router.push('/login');
        }
        return null;
    }


  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
        <Card className="bg-card border-border overflow-hidden">
            <div className="relative h-40 bg-accent/30">
                 <img src={profile.bannerUrl || "https://images.unsplash.com/photo-1512364615838-8088a04a778b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxmdXR1cmlzdGljJTIwY2l0eXxlbnwwfHx8fDE3Njc4Njk2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"} alt="Banner de perfil" className="object-cover w-full h-full opacity-30"/>
            </div>
            <CardHeader className="relative -mt-16 z-10">
                <div className="flex flex-col items-center text-center">
                    <Avatar className="h-32 w-32 border-4 border-primary shadow-lg">
                        <AvatarImage src={profile.avatarUrl} data-ai-hint="person avatar" alt={profile.name || "User"} />
                        <AvatarFallback>{profile.name?.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="mt-4">
                        <div className="flex items-center gap-2 justify-center">
                           <h1 className="text-3xl font-bold">{profile.name}</h1>
                           <ShieldCheck className="w-7 h-7 text-primary" />
                        </div>
                        <p className="text-muted-foreground">{user.email}</p>
                        <div className="mt-3 flex gap-2 justify-center">
                            <Badge variant="secondary" className="text-sm capitalize">{profile.role}</Badge>
                            <Badge variant="outline" className="text-sm">Miembro desde {new Date(user.metadata.creationTime!).getFullYear()}</Badge>
                        </div>
                    </div>
                </div>
                <div className="absolute top-20 right-4">
                    <EditProfileDialog profile={profile} />
                </div>
            </CardHeader>
            <CardContent>
                <Separator className="my-6" />
                <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-background rounded-lg border">
                        <h3 className="text-3xl font-bold text-primary">12</h3>
                        <p className="text-muted-foreground">Servicios Completados</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                        <h3 className="text-3xl font-bold text-primary">5</h3>
                        <p className="text-muted-foreground">Proyectos Activos</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg border">
                        <h3 className="text-3xl font-bold text-primary">$1,250</h3>
                        <p className="text-muted-foreground">Inversión Total</p>
                    </div>
                </div>
                 <Separator className="my-6" />
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link href="/billing"><Button variant="outline" className="justify-start h-12 text-base gap-3 hover:bg-accent/50 hover:text-foreground"><Wallet/> Mi Billetera</Button></Link>
                    <Link href="/tracking"><Button variant="outline" className="justify-start h-12 text-base gap-3 hover:bg-accent/50 hover:text-foreground"><History/> Historial de Proyectos</Button></Link>
                     <Link href="/support"><Button variant="outline" className="justify-start h-12 text-base gap-3 hover:bg-accent/50 hover:text-foreground"><MessageSquare/> Mis Mensajes</Button></Link>
                    <Link href="/support"><Button variant="outline" className="justify-start h-12 text-base gap-3 hover:bg-accent/50 hover:text-foreground"><Settings/> Configuración</Button></Link>
                 </div>
            </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 bg-card border-border">
                <CardHeader>
                    <CardTitle>Historial de Servicios Recientes</CardTitle>
                    <CardDescription>Un resumen de tus proyectos más recientes y su estado actual.</CardDescription>
                </CardHeader>
                <CardContent>
                   <ul className="space-y-4">
                        <li className="flex items-center justify-between p-3 bg-background rounded-lg border">
                            <div>
                                <p className="font-semibold">Diseño de Ecosistema Digital</p>
                                <p className="text-sm text-muted-foreground">Con Neo Anderson</p>
                            </div>
                            <Badge variant="default">Completado</Badge>
                        </li>
                        <li className="flex items-center justify-between p-3 bg-background rounded-lg border">
                            <div>
                                <p className="font-semibold">Coaching de Potencial Humano</p>
                                <p className="text-sm text-muted-foreground">Con Morpheus</p>
                            </div>
                            <Badge variant="secondary">En Progreso</Badge>
                        </li>
                         <li className="flex items-center justify-between p-3 bg-background rounded-lg border">
                            <div>
                                <p className="font-semibold">Auditoría de Ciberseguridad</p>
                                <p className="text-sm text-muted-foreground">Con Trinity</p>
                            </div>
                            <Badge variant="destructive">Pendiente</Badge>
                        </li>
                   </ul>
                </CardContent>
            </Card>
             <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle>Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <EditProfileDialog profile={profile} />
                    <Link href="/support"><Button variant="outline" className="justify-start text-base"><ShieldCheck className="mr-2"/> Seguridad de la Cuenta</Button></Link>
                    <Button variant="destructive" className="justify-start text-base mt-6" onClick={handleSignOut}><LogOut className="mr-2"/> Cerrar Sesión</Button>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
