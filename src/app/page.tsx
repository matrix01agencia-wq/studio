import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { IntelligentSearch } from '@/components/features/intelligent-search';


const serviceCategories = [
    { name: 'Digital', imageId: 'service-digital', description: 'Soluciones tecnológicas y desarrollo a medida.' },
    { name: 'Bienestar', imageId: 'service-wellness', description: 'Entrenadores, nutricionistas y terapeutas.' },
    { name: 'Entretenimiento', imageId: 'service-entertainment', description: 'DJs, músicos y organizadores de eventos.' },
    { name: 'Hogar', imageId: 'service-home', description: 'Diseño de interiores y automatización del hogar.' },
    { name: 'Legal & Finanzas', imageId: 'service-legal', description: 'Asesoría experta para proteger tu futuro.' },
    { name: 'Creativo', imageId: 'service-creative', description: 'Diseño, branding y producción de contenido.' },
];

const featuredProfessionals = [
    { name: 'Elena Petrova', specialty: 'Desarrollo de IA', rating: 5, reviews: 120, avatarId: 'avatar-2' },
    { name: 'Kenji Tanaka', specialty: 'Ciberseguridad', rating: 5, reviews: 98, avatarId: 'avatar-3' },
    { name: 'Aisha Khan', specialty: 'Entrenadora Personal', rating: 5, reviews: 215, avatarId: 'avatar-4' },
    { name: 'Carlos Gomez', specialty: 'Chef de Alta Cocina', rating: 5, reviews: 150, avatarId: 'avatar-5' },
];

const getImage = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id) || PlaceHolderImages[0];
};

export default function Home() {
  const heroImage = getImage('nexus-hero');
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover -z-10 brightness-50"
            priority
            data-ai-hint={heroImage.imageHint}
          />
          <div className="container px-4 md:px-6 z-10">
            <div className="max-w-3xl mx-auto space-y-4">
              <Badge variant="secondary" className="text-base py-2 px-4 rounded-full bg-primary/20 border-primary/50 text-primary">
                Plataforma Exclusiva de Servicios de Élite
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-lg">
                Bienvenido a AMATRIX
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
                Conectamos a clientes exigentes con profesionales de primer nivel. Encuentra soluciones a medida para tus necesidades más específicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="text-lg">
                  <Link href="/register">Conviértete en Cliente</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="text-lg">
                  <Link href="/register">Únete como Profesional</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 lg:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-3 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Encuentra el Servicio Perfecto</h2>
                    <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        Utiliza nuestra búsqueda inteligente para describir lo que necesitas y deja que nuestra IA te conecte con el experto ideal.
                    </p>
                </div>
                <IntelligentSearch />
            </div>
        </section>


        <section id="services" className="py-12 md:py-20 lg:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Categorías de Servicios</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Explora un universo de posibilidades. Profesionales rigurosamente seleccionados en cada campo.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {serviceCategories.map((category) => {
                const image = getImage(category.imageId);
                return (
                    <Card key={category.name} className="overflow-hidden group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
                        <CardHeader className="p-0">
                        <div className="relative h-48">
                            <Image
                                src={image.imageUrl}
                                alt={image.description}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                data-ai-hint={image.imageHint}
                            />
                        </div>
                        </CardHeader>
                        <CardContent className="p-6">
                        <CardTitle className="text-2xl mb-2">{category.name}</CardTitle>
                        <CardDescription>{category.description}</CardDescription>
                        <Button variant="link" className="p-0 mt-4 text-primary">
                            Explorar <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        </CardContent>
                    </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section id="professionals" className="py-12 md:py-20 lg:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Profesionales Destacados</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                La élite de la industria. Verificados, experimentados y listos para superar tus expectativas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredProfessionals.map((prof) => {
                const avatar = getImage(prof.avatarId);
                return (
                <Card key={prof.name} className="text-center flex flex-col items-center p-6">
                    <Avatar className="w-24 h-24 mb-4 border-4 border-primary/50">
                        <AvatarImage src={avatar.imageUrl} data-ai-hint={avatar.imageHint} alt={prof.name} />
                        <AvatarFallback>{prof.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{prof.name}</CardTitle>
                    <p className="text-primary font-medium">{prof.specialty}</p>
                    <div className="flex items-center gap-1 mt-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="font-bold">{prof.rating.toFixed(1)}</span>
                        <span className="text-muted-foreground">({prof.reviews} reseñas)</span>
                    </div>
                </Card>
              )})}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card text-card-foreground border-t">
        <div className="container py-8 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Agencia Amatrix. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:text-primary">Términos de Servicio</Link>
            <Link href="#" className="text-sm hover:text-primary">Política de Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
