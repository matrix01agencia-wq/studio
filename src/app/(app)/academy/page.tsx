import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookCheck, BrainCircuit, Rocket } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
    {
        title: "Fundamentos de Desarrollo Web",
        description: "Domina HTML, CSS y JavaScript desde cero. Crea sitios web interactivos y responsivos.",
        icon: BookCheck
    },
    {
        title: "Psicología del Éxito",
        description: "Desarrolla una mentalidad de crecimiento y alcanza tus metas personales y profesionales.",
        icon: BrainCircuit
    },
    {
        title: "Lanzamiento de Proyectos Digitales",
        description: "Aprende a planificar, ejecutar y escalar tus ideas de negocio en el mundo digital.",
        icon: Rocket
    }
];

export default function AcademyPage() {
  const academyBanner = PlaceHolderImages.find((img) => img.id === 'academy-banner');
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Eleva tus Habilidades con Amatrix Learn</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">El conocimiento es poder. En Amatrix Learn, te damos las herramientas para que transformes tu potencial en resultados reales. Accede a cursos de élite diseñados para el mundo de hoy.</p>
      </header>

      {academyBanner &&
        <div className="relative h-80 w-full rounded-lg overflow-hidden border border-accent/50 mb-12">
            <Image
                src={academyBanner.imageUrl}
                alt={academyBanner.description}
                fill
                className="object-cover"
                data-ai-hint={academyBanner.imageHint}
            />
            <div className="absolute inset-0 bg-accent/60" />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
                <h2 className="text-4xl font-bold text-accent-foreground mb-4">Tu Futuro Comienza Aquí</h2>
                <p className="text-xl text-accent-foreground/80 max-w-2xl mb-6">Nuestra plataforma educativa está en desarrollo para traerte contenido de vanguardia. Prepárate para una experiencia de aprendizaje sin igual.</p>
                 <Link href="#coming-soon">
                    <Button size="lg" variant="secondary">Explorar Próximos Cursos</Button>
                </Link>
            </div>
        </div>
      }

      <section id="coming-soon" className="space-y-12">
        <div>
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Próximamente: Cursos Que Te Impulsarán al Siguiente Nivel</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {courses.map((course, index) => (
                    <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                        <CardHeader className="items-center text-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <course.icon className="w-8 h-8 text-primary"/>
                            </div>
                            <CardTitle className="text-2xl">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground">{course.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        
        <div className="text-center p-8 bg-card rounded-lg border-2 border-dashed border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">¡Estamos Construyendo la Academia del Futuro!</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">Nuevos cursos, certificaciones y rutas de aprendizaje especializadas estarán disponibles muy pronto. Mantente atento para ser el primero en acceder.</p>
        </div>

         <div className="grid gap-8 md:grid-cols-3">
            {courses.map((course, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                    <CardHeader className="items-center text-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <course.icon className="w-8 h-8 text-primary"/>
                        </div>
                        <CardTitle className="text-2xl">{course.title} (Avanzado)</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                        <p className="text-muted-foreground">Lleva tus conocimientos de {course.title.split(' ')[0]} al siguiente nivel con casos prácticos y técnicas avanzadas.</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

    </div>
  );
}
