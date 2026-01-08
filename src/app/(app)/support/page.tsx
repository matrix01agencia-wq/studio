import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LifeBuoy, MessageSquare, Ticket, BookOpen, ShieldQuestion } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Protocolo de Soporte Inquebrantable</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Tu tranquilidad es nuestra misión. Accede a nuestro centro de ayuda, soporte en vivo y gestión de tickets. Estamos aquí para asegurar que tu experiencia sea impecable.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
                <BookOpen className="w-8 h-8 text-primary"/>
                <CardTitle>Base de Conocimiento</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Encuentra respuestas instantáneas, guías y tutoriales en nuestro completo centro de ayuda.</CardDescription>
                 <Button variant="link" className="px-0 mt-2">Explorar artículos &rarr;</Button>
            </CardContent>
        </Card>
        <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
                <MessageSquare className="w-8 h-8 text-primary"/>
                <CardTitle>Soporte en Vivo 24/7</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Chatea con un especialista de Amatrix en tiempo real. Soluciones rápidas, a cualquier hora.</CardDescription>
                 <Button variant="link" className="px-0 mt-2">Iniciar Chat (Próximamente)</Button>
            </CardContent>
        </Card>
        <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-4">
                <Ticket className="w-8 h-8 text-primary"/>
                <CardTitle>Sistema de Tickets</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Para consultas complejas, crea un ticket y sigue su progreso hasta la resolución.</CardDescription>
                <Button variant="link" className="px-0 mt-2">Crear un Ticket &rarr;</Button>
            </CardContent>
        </Card>
      </div>

       <Card className="bg-card border-border">
        <CardHeader>
            <CardTitle className="text-2xl">¿Necesitas Ayuda? Envía tu Consulta</CardTitle>
            <CardDescription>Describe tu problema con el mayor detalle posible y nuestro equipo de expertos se pondrá en contacto contigo a la brevedad.</CardDescription>
        </CardHeader>
        <CardContent>
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <Input placeholder="Tu Nombre Completo" className="bg-input h-12"/>
                    <Input type="email" placeholder="Tu Correo Electrónico" className="bg-input h-12"/>
                </div>
                 <Input placeholder="Asunto del Ticket (ej. 'Problema con facturación')" className="bg-input h-12"/>
                <Textarea placeholder="Describe detalladamente tu problema aquí. Incluye cualquier información relevante como IDs de servicio, fechas o nombres de profesionales." className="bg-input min-h-[180px]"/>
                <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">* Nuestro tiempo de respuesta promedio es de 2 horas.</p>
                    <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">Enviar Ticket de Soporte</Button>
                </div>
            </form>
        </CardContent>
       </Card>

       <section className="py-12">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Preguntas Frecuentes (FAQ)</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-semibold text-lg mb-2">¿Cómo se verifican los profesionales?</h4>
                    <p className="text-muted-foreground">Nuestro proceso incluye verificación de identidad, revisión de portafolio, entrevistas y comprobación de referencias para garantizar la máxima calidad.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-semibold text-lg mb-2">¿Qué es la garantía de Amatrix?</h4>
                    <p className="text-muted-foreground">Si no estás satisfecho con un servicio, intervenimos para mediar, corregir o, en última instancia, reembolsar tu inversión. Tu confianza es nuestra prioridad.</p>
                </div>
                <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-semibold text-lg mb-2">¿Cómo funciona la billetera interna?</h4>
                    <p className="text-muted-foreground">Puedes cargar fondos de forma segura para pagar servicios con un solo clic, gestionar suscripciones y recibir reembolsos de manera instantánea.</p>
                </div>
                 <div className="p-4 bg-card rounded-lg border">
                    <h4 className="font-semibold text-lg mb-2">¿Puedo cancelar un servicio?</h4>
                    <p className="text-muted-foreground">Sí, las políticas de cancelación varían según el profesional y el servicio. Puedes consultar los términos específicos antes de contratar.</p>
                </div>
            </div>
       </section>

    </div>
  );
}
