import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function AcademyPage() {
  const academyBanner = PlaceHolderImages.find((img) => img.id === 'academy-banner');
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Amatrix Learn</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Tu centro de formación. Accede a cursos express y recursos educativos virtuales para potenciar tus habilidades.</p>
      </header>

      {academyBanner &&
        <div className="relative h-64 w-full rounded-lg overflow-hidden border border-accent/50">
            <Image
                src={academyBanner.imageUrl}
                alt={academyBanner.description}
                fill
                className="object-cover"
                data-ai-hint={academyBanner.imageHint}
            />
            <div className="absolute inset-0 bg-accent/50" />
            <div className="relative z-10 flex items-center justify-center h-full">
                <h2 className="text-3xl font-bold text-accent-foreground">Contenido Educativo Próximamente</h2>
            </div>
        </div>
      }

    </div>
  );
}
