import { Map, Timer, CheckCircle, Hourglass, XCircle, Package } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const activeServices = [
    {
        id: "DS-001",
        title: "Desarrollo de Ecosistema Digital",
        professional: "Neo Anderson",
        type: "virtual",
        status: "En Progreso",
        progress: 75,
        icon: Package
    },
    {
        id: "HC-003",
        title: "Reparación de Hardware",
        professional: "Switch",
        type: "presencial",
        status: "En Camino",
        progress: 25,
        icon: Map
    },
    {
        id: "LC-002",
        title: "Sesión de Coaching",
        professional: "Morpheus",
        type: "virtual",
        status: "Agendado",
        progress: 0,
        icon: Hourglass
    }
];

export default function TrackingPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Tu Centro de Comando: Live Tracker</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Monitorea cada detalle de tus servicios en tiempo real. Desde el progreso de proyectos virtuales hasta la ubicación de profesionales en campo. Control total, máxima tranquilidad.</p>
      </header>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeServices.map(service => (
                <Card key={service.id} className="bg-card border-border flex flex-col">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <Badge variant="secondary" className="mb-2">{service.id}</Badge>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                                <CardDescription>con {service.professional}</CardDescription>
                            </div>
                             <service.icon className="w-8 h-8 text-primary"/>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-muted-foreground">Estado</span>
                                <Badge variant={service.status === 'En Progreso' ? 'default' : 'outline'}>{service.status}</Badge>
                            </div>
                            <Progress value={service.progress} className="h-2 mb-4" />
                             <div className="flex justify-between items-center text-xs text-muted-foreground">
                                <span>{service.type === 'virtual' ? 'Proyecto Virtual' : 'Servicio Presencial'}</span>
                                <span>{service.progress}% completado</span>
                            </div>
                        </div>
                        <Button className="w-full mt-6">Ver Detalles del Servicio</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
        
        <Card className="mt-12 bg-card border-2 border-dashed border-border">
             <CardContent className="p-8 text-center">
                 <h3 className="text-2xl font-bold mb-2">Historial de Proyectos</h3>
                 <p className="text-muted-foreground mb-4">Revisa todos tus servicios completados y cancelados.</p>
                 <div className="space-y-4 max-w-2xl mx-auto text-left">
                     <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                        <div className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500"/>
                            <div>
                                <p className="font-semibold">Auditoría de Ciberseguridad</p>
                                <p className="text-sm text-muted-foreground">Completado el 15/06/2024</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm">Ver Factura</Button>
                     </div>
                      <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                        <div className="flex items-center gap-3">
                            <XCircle className="w-5 h-5 text-destructive"/>
                            <div>
                                <p className="font-semibold">Clase de Cocina Molecular</p>
                                <p className="text-sm text-muted-foreground">Cancelado el 10/06/2024</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm">Detalles</Button>
                     </div>
                 </div>
             </CardContent>
        </Card>
    </div>
  );
}
