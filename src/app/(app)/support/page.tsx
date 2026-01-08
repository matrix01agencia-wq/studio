import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LifeBuoy, MessageSquare, Ticket } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Support Protocol</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Centro de ayuda, soporte en vivo y gestión de tickets. Estamos aquí para asistirte.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center gap-4">
                <LifeBuoy className="w-8 h-8 text-primary"/>
                <CardTitle>Centro de Ayuda</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Encuentra respuestas a las preguntas más frecuentes.</CardDescription>
            </CardContent>
        </Card>
        <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center gap-4">
                <MessageSquare className="w-8 h-8 text-primary"/>
                <CardTitle>Soporte en Vivo</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Chatea con un agente de soporte en tiempo real (Próximamente).</CardDescription>
            </CardContent>
        </Card>
        <Card className="bg-card border-border hover:border-primary/50 transition-colors">
            <CardHeader className="flex flex-row items-center gap-4">
                <Ticket className="w-8 h-8 text-primary"/>
                <CardTitle>Gestión de Tickets</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>Crea y sigue el estado de tus solicitudes de soporte.</CardDescription>
            </CardContent>
        </Card>
      </div>

       <Card className="bg-card border-border">
        <CardHeader>
            <CardTitle>Enviar un Ticket de Soporte</CardTitle>
            <CardDescription>Describe tu problema y nuestro equipo se pondrá en contacto.</CardDescription>
        </CardHeader>
        <CardContent>
            <form className="space-y-4">
                <Input placeholder="Asunto" className="bg-input"/>
                <Textarea placeholder="Describe tu problema aquí..." className="bg-input min-h-[150px]"/>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Enviar Ticket</Button>
            </form>
        </CardContent>
       </Card>

    </div>
  );
}
