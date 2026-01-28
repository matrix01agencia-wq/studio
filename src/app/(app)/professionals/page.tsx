import { Card, CardContent } from "@/components/ui/card";

export default function ProfessionalsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Fuerza de Élite</h1>
      <Card>
        <CardContent className="p-6">
          <p>Conoce a los profesionales verificados que forman parte de nuestra red. Filtra por especialidad, reputación y disponibilidad para encontrar a tu socio ideal.</p>
          {/* Placeholder for professionals list */}
        </CardContent>
      </Card>
    </div>
  );
}
