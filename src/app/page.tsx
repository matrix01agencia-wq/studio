
'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Zap, ShieldCheck, HeartHandshake, User, Briefcase, LogIn } from 'lucide-react';
import { IntelligentSearch } from '@/components/features/intelligent-search';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { useUser } from '@/firebase/auth/use-user';
import { useCollection } from '@/firebase/firestore/use-collection';
import { collection, query, where, limit } from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';
import { useMemo } from 'react';
import { UserProfile } from '@/lib/types';


const featuredServices = [
  {
    id: 'digital',
    title: 'Ecosistema Digital 360°',
    description: 'Desde consultoría y diseño hasta marketing y desarrollo web. Tu presencia digital, reinventada.',
    image: PlaceHolderImages.find((img) => img.id === 'service-digital'),
  },
  {
    id: 'wellness',
    title: 'Bienestar y Educación de Élite',
    description: 'Coaching, psicología, nutrición y más. Invierte en ti con los mejores expertos.',
    image: PlaceHolderImages.find((img) => img.id === 'service-wellness'),
  },
  {
    id: 'entertainment',
    title: 'Entertainment Hub Premium',
    description: 'Shows, DJs, y producción de eventos en vivo. Crea experiencias inolvidables.',
    image: PlaceHolderImages.find((img) => img.id === 'service-entertainment'),
  },
  {
    id: 'home-services',
    title: 'Servicios Físicos Confiables',
    description: 'Técnicos, reparaciones y logística con la máxima eficiencia y garantía de calidad.',
    image: PlaceHolderImages.find((img) => img.id === 'service-home'),
  },
  {
    id: 'legal-financial',
    title: 'Asesoría Legal y Financiera',
    description: 'Expertos listos para blindar tus decisiones y optimizar tus recursos.',
    image: PlaceHolderImages.find((img) => img.id === 'service-legal'),
  },
  {
    id: 'creative-design',
    title: 'Estudio Creativo y Diseño',
    description: 'Branding, diseño gráfico y creación de contenido que deja huella.',
    image: PlaceHolderImages.find((img) => img.id === 'service-creative'),
  },
];


export default function Home() {
  const { user } = useUser();
  const firestore = useFirestore();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'nexus-hero');

  const topProfessionalsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(
        collection(firestore, 'users'), 
        where('role', '==', 'professional'), 
        limit(6)
    );
  }, [firestore]);

  const { data: topProfessionals, isLoading } = useCollection<UserProfile>(topProfessionalsQuery);

  return (
    <main className="flex-1 overflow-auto">
      <div className="relative h-[80vh] min-h-[700px] flex items-center justify-center text-center p-4">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 flex flex-col items-center gap-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter">
            La Plataforma Definitiva para Servicios de Élite
          </h1>
          <p className="max-w-3xl text-lg md:text-xl text-foreground/80">
            Accede a una red exclusiva de profesionales verificados y lleva tus proyectos al siguiente nivel. Rápido, seguro y eficiente.
          </p>
          <IntelligentSearch />
           {!user && (
            <>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/register/client" passHref>
                  <Button size="lg" variant="default" className="text-lg px-8 py-6 w-full sm:w-auto">
                    <User className="mr-2" /> Registrarme como Cliente
                  </Button>
                </Link>
                <Link href="/register/professional" passHref>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                    <Briefcase className="mr-2" /> Registrarme como Profesional
                  </Button>
                </Link>
              </div>
              <div className="mt-6">
                  <Link href="/login">
                    <Button variant="ghost" className="text-lg text-white/80 hover:text-white hover:bg-white/10">
                        <LogIn className="mr-2" /> ¿Ya tienes una cuenta? Inicia Sesión
                    </Button>
                  </Link>
              </div>
            </>
           )}
        </div>
      </div>

       <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">¿Por Qué Elegir Amatrix?</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">No somos solo un directorio. Somos tu socio estratégico para el éxito.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <ShieldCheck className="w-10 h-10 text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Verificación de Élite</h3>
              <p className="text-muted-foreground">Cada profesional pasa por un riguroso proceso de validación. Solo los mejores llegan aquí.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-full mb-4">
                <Zap className="w-10 h-10 text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Conexión Instantánea</h3>
              <p className="text-muted-foreground">Nuestra IA te conecta con el experto ideal en segundos. Di adiós a la búsqueda interminable.</p>
            </div>
             <div className="flex flex-col items-center">
               <div className="p-4 bg-primary/10 rounded-full mb-4">
                <HeartHandshake className="w-10 h-10 text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-2">Soporte y Garantía</h3>
              <p className="text-muted-foreground">Tu satisfacción es nuestra prioridad. Ofrecemos soporte 24/7 y garantía en cada servicio.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-4 md:p-8 space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Un Universo de Soluciones a tu Alcance</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-card border-border hover:border-primary/50 transition-colors duration-300 flex flex-col group">
                {service.image && (
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={service.image.imageUrl}
                      alt={service.image.description}
                      fill
                      className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint={service.image.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      unoptimized
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
                      Descubrir Más <ArrowRight className="ml-2"/>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Conoce a la Fuerza de Élite</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topProfessionals?.map((prof) => (
              <Card key={prof.id} className="bg-card border-border hover:border-primary/50 transition-colors duration-300 overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 border-4 border-accent mb-4">
                    <AvatarImage src={prof.avatarUrl} alt={prof.name} data-ai-hint="person avatar" />
                    <AvatarFallback>{prof.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{prof.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{prof.professionalDetails?.specialty}</p>
                    <div className="flex items-center justify-center gap-1 pt-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold">{prof.professionalDetails?.rating || 5}</span>
                      <span className="text-xs text-muted-foreground ml-1">(+500 servicios)</span>
                    </div>
                  </div>
                   <Link href={`/professionals/${prof.id}`} passHref className="w-full">
                      <Button variant="ghost" className="mt-4 w-full text-primary hover:text-primary">
                        Ver Perfil <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1"/>
                      </Button>
                    </Link>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link href="/professionals" passHref>
              <Button variant="default" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Explora el Directorio Completo <ArrowRight className="ml-2"/>
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
