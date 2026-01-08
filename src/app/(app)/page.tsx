import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import { IntelligentSearch } from '@/components/features/intelligent-search';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

const featuredServices = [
  {
    id: 'digital',
    title: 'Ecosistema Digital',
    description: 'Consultoría, diseño, marketing, y desarrollo web a tu alcance.',
    image: PlaceHolderImages.find((img) => img.id === 'service-digital'),
  },
  {
    id: 'wellness',
    title: 'Bienestar & Educación',
    description: 'Clases, tutorías, coaching, psicología, nutrición y más.',
    image: PlaceHolderImages.find((img) => img.id === 'service-wellness'),
  },
  {
    id: 'entertainment',
    title: 'Entertainment Hub',
    description: 'Shows, DJs, baile y streaming en vivo para tus eventos.',
    image: PlaceHolderImages.find((img) => img.id === 'service-entertainment'),
  },
];

const topProfessionals = [
  {
    name: 'Neo Anderson',
    specialty: 'Web Developer',
    rating: 5,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-1'),
  },
  {
    name: 'Trinity',
    specialty: 'Cybersecurity Expert',
    rating: 5,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-2'),
  },
  {
    name: 'Morpheus',
    specialty: 'Life Coach',
    rating: 4.9,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-3'),
  },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'nexus-hero');

  return (
    <main className="flex-1 overflow-auto">
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center p-4">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 flex flex-col items-center gap-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tighter">
            Bienvenido al Nexus
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
            Tu portal a servicios de élite. Conecta con profesionales verificados para soluciones presenciales y virtuales.
          </p>
          <IntelligentSearch />
        </div>
      </div>

      <div className="p-4 md:p-8 space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Servicios Destacados</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-card border-border hover:border-primary/50 transition-colors duration-300 flex flex-col">
                {service.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image.imageUrl}
                      alt={service.image.description}
                      fill
                      className="object-cover rounded-t-lg"
                      data-ai-hint={service.image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex items-end">
                   <Link href="/services" passHref className="w-full">
                    <Button variant="outline" className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                      Explorar Categoría
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Profesionales de Élite</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topProfessionals.map((prof) => (
              <Card key={prof.name} className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  {prof.avatar && (
                    <Avatar className="h-20 w-20 border-2 border-accent">
                      <AvatarImage src={prof.avatar.imageUrl} alt={prof.name} data-ai-hint={prof.avatar.imageHint} />
                      <AvatarFallback>{prof.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{prof.name}</CardTitle>
                    <p className="text-sm text-primary">{prof.specialty}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">{prof.rating}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="ml-auto text-muted-foreground hover:text-primary">
                    <ArrowRight />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-8">
            <Link href="/professionals" passHref>
              <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Ver Todos los Profesionales <ArrowRight className="ml-2"/>
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
