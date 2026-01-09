import { Calendar, Check, Clock, Plus, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const upcomingAppointments = [
    {
        time: "10:00 AM",
        duration: "1h",
        title: "Sesión de Estrategia Digital",
        professional: "Oráculo",
        type: "virtual",
        avatar: PlaceHolderImages.find(p => p.id === 'avatar-4')
    },
    {
        time: "2:00 PM",
        duration: "1.5h",
        title: "Auditoría de Ciberseguridad",
        professional: "Trinity",
        type: "virtual",
        avatar: PlaceHolderImages.find(p => p.id === 'avatar-2')
    },
    {
        time: "Mañana, 9:00 AM",
        duration: "45m",
        title: "Coaching de Liderazgo",
        professional: "Morpheus",
        type: "virtual",
        avatar: PlaceHolderImages.find(p => p.id === 'avatar-3')
    }
]

export default function AgendaPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Tu Centro de Control de Citas</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Gestiona tu tiempo, maximiza tu productividad. Aquí puedes ver, agendar y reprogramar todas tus citas con la élite de Amatrix. Tu éxito, organizado.</p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-6 h-6 text-primary"/>
                        Próximas Citas
                    </CardTitle>
                    <CardDescription>Tus próximos compromisos con nuestros profesionales de élite.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {upcomingAppointments.map((apt, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border hover:border-primary/50 transition-colors">
                            <Avatar className="w-16 h-16 border-2 border-accent">
                                <AvatarImage src={apt.avatar?.imageUrl} alt={apt.professional} data-ai-hint={apt.avatar?.imageHint} />
                                <AvatarFallback>{apt.professional.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg text-foreground">{apt.title}</h3>
                                    <Badge variant="secondary" className="hidden sm:inline-flex">{apt.time}</Badge>
                                </div>
                                <p className="text-muted-foreground">Con <span className="font-semibold text-primary">{apt.professional}</span></p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4"/>
                                        <span>{apt.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Video className="w-4 h-4"/>
                                        <span>Cita Virtual</span>
                                    </div>
                                </div>
                            </div>
                            <Link href="/support">
                                <Button variant="ghost" size="icon" className="hidden sm:flex">
                                    <Plus className="w-5 h-5 -rotate-45" />
                                </Button>
                            </Link>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>

        <div className="space-y-8">
            <Card className="bg-card border-border text-center">
                 <CardHeader>
                    <CardTitle>¿Necesitas un nuevo servicio?</CardTitle>
                    <CardDescription>Accede al instante a la red de profesionales más exclusiva.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href="/professionals">
                        <Button size="lg" className="w-full">
                            <Plus className="mr-2"/>
                            Agendar Nueva Cita
                        </Button>
                    </Link>
                </CardContent>
            </Card>
            <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle>Historial de Citas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-green-500/20">
                        <Check className="w-5 h-5 text-green-500"/>
                        <div>
                            <p className="font-semibold">Revisión de Arquitectura</p>
                            <p className="text-sm text-muted-foreground">Completada con Neo</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-green-500/20">
                        <Check className="w-5 h-5 text-green-500"/>
                        <div>
                            <p className="font-semibold">Plan de Bienestar</p>
                            <p className="text-sm text-muted-foreground">Completada con Morpheus</p>
                        </div>
                    </div>
                    <Link href="/tracking" className="w-full">
                         <Button variant="outline" className="w-full mt-4">Ver Historial Completo</Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
