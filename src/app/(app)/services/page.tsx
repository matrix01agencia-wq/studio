import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Grid3x3 } from "lucide-react";

const serviceCategories = [
    { name: "Servicios Físicos", description: "Belleza, reparaciones, mascotas, cocina, limpieza, técnicos, logística y seguridad." },
    { name: "Bienestar & Educación", description: "Clases, tutorías, coaching, psicología, nutrición, yoga y entrenamiento." },
    { name: "Ecosistema Digital", description: "Consultoría, diseño, marketing, desarrollo web, copy y soporte remoto." },
    { name: "Entertainment Hub", description: "Shows, DJs, baile y streaming en vivo." },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Matrix Catalog</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Explora una jerarquía de servicios de élite. Encuentra la solución perfecta para tus necesidades, ya sea presencial o virtual.</p>
      </header>
      
      <div className="grid gap-6 md:grid-cols-2">
        {serviceCategories.map((category) => (
            <Card key={category.name} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer">
                <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                        <Grid3x3 className="w-8 h-8 text-primary"/>
                        <CardTitle className="text-2xl">{category.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
            </Card>
        ))}
      </div>
    </div>
  );
}
