import { Map, Timer } from "lucide-react";

export default function TrackingPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Live Tracker</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Sigue el estado de tus servicios en tiempo real. Mapa para servicios presenciales y temporizador para sesiones virtuales.</p>
      </header>
       <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center justify-center h-80 bg-card border-2 border-dashed border-border rounded-lg p-8">
                <Map className="w-16 h-16 text-primary mb-4"/>
                <h2 className="text-2xl font-bold mb-2">Seguimiento Presencial</h2>
                <p className="text-muted-foreground text-center">Mapa en tiempo real del profesional (Próximamente).</p>
            </div>
            <div className="flex flex-col items-center justify-center h-80 bg-card border-2 border-dashed border-border rounded-lg p-8">
                <Timer className="w-16 h-16 text-primary mb-4"/>
                <h2 className="text-2xl font-bold mb-2">Sesión Virtual</h2>
                <p className="text-muted-foreground text-center">Temporizador y estado de la sesión (Próximamente).</p>
            </div>
        </div>
    </div>
  );
}
