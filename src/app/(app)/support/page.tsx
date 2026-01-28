import { Card, CardContent } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Protocolo de Soporte</h1>
      <Card>
        <CardContent className="p-6">
          <p>¿Necesitas ayuda? Accede a nuestra base de conocimientos, contacta con el equipo de soporte 24/7 o inicia una mediación para un servicio.</p>
          {/* Placeholder for support tickets, FAQ, etc. */}
        </CardContent>
      </Card>
    </div>
  );
}
