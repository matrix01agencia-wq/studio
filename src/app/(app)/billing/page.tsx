import { Card, CardContent } from "@/components/ui/card";

export default function BillingPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Centro Financiero</h1>
      <Card>
        <CardContent className="p-6">
          <p>Consulta tu historial de transacciones, gestiona tus métodos de pago y descarga facturas. Control total sobre tus finanzas en Amatrix.</p>
          {/* Placeholder for billing history and payment methods */}
        </CardContent>
      </Card>
    </div>
  );
}
