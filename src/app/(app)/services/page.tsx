import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Grid3x3, Briefcase, HeartPulse, Building, Mic2, Palette, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const serviceCategories = [
    { 
        name: "Servicios Físicos", 
        description: "Desde reparaciones del hogar hasta logística y seguridad. Profesionales confiables a tu puerta.",
        icon: Building,
        examples: ["Técnicos", "Limpieza", "Mascotas", "Chefs"]
    },
    { 
        name: "Bienestar & Educación", 
        description: "Invierte en ti. Clases, coaching, psicología y entrenamiento para alcanzar tu máximo potencial.",
        icon: HeartPulse,
        examples: ["Coaching", "Nutrición", "Yoga", "Tutorías"]
    },
    { 
        name: "Ecosistema Digital", 
        description: "Impulsa tu presencia en línea. Desarrollo web, marketing, diseño y consultoría estratégica.",
        icon: Briefcase,
        examples: ["Desarrollo Web", "Marketing", "SEO", "Diseño UX/UI"]
    },
    { 
        name: "Entertainment Hub", 
        description: "Crea eventos inolvidables. Shows en vivo, DJs, producción de contenido y streaming profesional.",
        icon: Mic2,
        examples: ["DJs", "Música en vivo", "Streaming", "Producción"]
    },
    { 
        name: "Asesoría Profesional", 
        description: "Decisiones inteligentes. Expertos en áreas legales, financieras y de negocio listos para guiarte.",
        icon: Grid3x3,
        examples: ["Legal", "Finanzas", "Consultoría", "Estrategia"]
    },
    { 
        name: "Creatividad y Diseño", 
        description: "Dale vida a tus ideas. Branding, ilustración, video y fotografía que conectan con tu audiencia.",
        icon: Palette,
        examples: ["Branding", "Video", "Fotografía", "Ilustración"]
    },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">El Catálogo Definitivo de Servicios</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Explora un universo de soluciones de élite, meticulosamente organizadas para tus necesidades. Tu próximo gran proyecto comienza aquí.</p>
      </header>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceCategories.map((category) => (
            <Card key={category.name} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col group">
                <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                        <category.icon className="w-10 h-10 text-primary"/>
                        <CardTitle className="text-2xl">{category.name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                    <div className="mb-4">
                        <p className="text-sm font-semibold text-muted-foreground mb-2">Ejemplos:</p>
                        <div className="flex flex-wrap gap-2">
                            {category.examples.map(ex => <div key={ex} className="text-xs bg-accent/30 text-accent-foreground/80 px-2 py-1 rounded">{ex}</div>)}
                        </div>
                    </div>
                    <Link href="/professionals" passHref className="w-full">
                        <Button className="w-full" variant="outline">
                            Explorar Profesionales <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
