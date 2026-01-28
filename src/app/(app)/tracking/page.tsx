import { Card, CardContent } from "@/components/ui/card";

export default function TrackingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Live Tracker</h1>
      <Card>
        <CardContent className="p-6">
          <p>Sigue en tiempo real el estado de tus servicios en curso. Para servicios a domicilio, visualiza la ubicación de tu profesional en el mapa.</p>
          {/* Placeholder for live tracking map/status */}
        </CardContent>
      </Card>
    </div>
  );
}
