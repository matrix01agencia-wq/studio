import { Card, CardContent } from "@/components/ui/card";

export default function AgendaPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Mi Agenda</h1>
      <Card>
        <CardContent className="p-6">
          <p>Gestiona todas tus citas, tanto pasadas como futuras. Confirma, cancela o reagenda tus servicios con facilidad.</p>
          {/* Placeholder for calendar/agenda view */}
        </CardContent>
      </Card>
    </div>
  );
}
