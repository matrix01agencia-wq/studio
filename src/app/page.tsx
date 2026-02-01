'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Rocket } from 'lucide-react';
import { IntelligentSearch } from '@/components/features/intelligent-search';

export default function Page() {
  const features = [
    {
      icon: Zap,
      title: 'Conexión Instantánea',
      description: 'Encuentra y contrata profesionales de élite en segundos. Nuestro algoritmo te conecta con el talento perfecto para tus necesidades.',
    },
    {
      icon: Shield,
      title: 'Seguridad Amatrix',
      description: 'Todas las transacciones y comunicaciones están encriptadas. Tu seguridad y la de tus proyectos es nuestra máxima prioridad.',
    },
    {
      icon: Rocket,
      title: 'Resultados Exponenciales',
      description: 'Colabora con expertos verificados y lleva tus proyectos al siguiente nivel. La excelencia es nuestro estándar.',
    },
  ];

  const services = [
    { id: 'digital', name: 'Soluciones Digitales', imageHint: 'code screen', imageUrl: 'https://picsum.photos/seed/s1/400/500' },
    { id: 'wellness', name: 'Bienestar y Salud', imageHint: 'yoga meditation', imageUrl: 'https://picsum.photos/seed/s2/400/500' },
    { id: 'entertainment', name: 'Entretenimiento', imageHint: 'dj concert', imageUrl: 'https://picsum.photos/seed/s3/400/500' },
    { id: 'home', name: 'Hogar y Oficios', imageHint: 'modern home', imageUrl: 'https://picsum.photos/seed/s4/400/500' },
    { id: 'legal', name: 'Asesoría Legal', imageHint: 'legal documents', imageUrl: 'https://picsum.photos/seed/s5/400/500' },
    { id: 'creative', name: 'Creatividad y Diseño', imageHint: 'creative workspace', imageUrl: 'https://picsum.photos/seed/s6/400/500' },
  ];

  const professionals = [
    { id: 1, name: 'Elena Roldán', specialty: 'Desarrolladora Full-Stack', imageUrl: 'https://picsum.photos/seed/p1/200/200', imageHint: 'person portrait' },
    { id: 2, name: 'Carlos Mendoza', specialty: 'Entrenador Personal', imageUrl: 'https://picsum.photos/seed/p2/200/200', imageHint: 'man profile' },
    { id: 3, name: 'Sofía Navarro', specialty: 'Chef Privada', imageUrl: 'https://picsum.photos/seed/p3/200/200', imageHint: 'woman portrait' },
    { id: 4, name: 'Ricardo Vargas', specialty: 'Abogado Corporativo', imageUrl: 'https://picsum.photos/seed/p4/200/200', imageHint: 'man smiling' },
    { id: 5, name: 'Lucía Ferrer', specialty: 'Diseñadora UX/UI', imageUrl: 'https://picsum.photos/seed/p5/200/200', imageHint: 'woman profile' },
    { id: 6, name: 'Javier Acosta', specialty: 'Consultor Financiero', imageUrl: 'https://picsum.photos/seed/p6/200/200', imageHint: 'person portrait' },
  ];
  
  const heroImage = {
      imageUrl: "https://picsum.photos/seed/nexus-hero/1920/1080",
      imageHint: "futuristic city"
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-border">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center mr-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 7L12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 7L12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 4.5L7 9.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <span className="text-xl font-bold text-primary tracking-wider">AMATRIX</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Iniciar Sesión
          </Link>
          <Button asChild>
            <Link href="/register">Registrarse</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-24 md:pt-32 lg:pt-40 relative">
          <div className="absolute inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="absolute inset-0 -z-20 h-full w-full opacity-10">
              <Image
                  src={heroImage.imageUrl}
                  alt="Nexus"
                  fill
                  className="object-cover"
                  data-ai-hint={heroImage.imageHint}
              />
          </div>
          <div className="container px-4 md:px-6 text-center relative">
            <div className="flex flex-col items-center space-y-4">
              <Badge variant="outline" className="py-1 px-3 rounded-full text-primary border-primary">
                Servicios de Élite
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Conecta con la <span className="text-primary">Excelencia</span>.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Amatrix es la plataforma exclusiva donde encuentras a los mejores profesionales para tus proyectos más ambiciosos.
              </p>
              <div className="w-full max-w-2xl py-8">
                 <IntelligentSearch />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">El Ecosistema Perfecto para tus Proyectos</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                    Nuestra plataforma está diseñada para la máxima eficiencia y seguridad.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index} className="grid gap-1 p-4 rounded-lg hover:bg-accent transition-all">
                    <div className="flex items-center gap-2">
                        <feature.icon className="h-8 w-8 text-primary" />
                        <h3 className="text-lg font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-5xl">Un Universo de Posibilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                {services.map((service) => (
                    <Link key={service.id} href="#" className="group relative overflow-hidden rounded-lg" prefetch={false}>
                        <Image
                            src={service.imageUrl}
                            alt={service.name}
                            width={400}
                            height={500}
                            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            data-ai-hint={service.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
          </div>
        </section>
        
        <section id="professionals" className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Conoce a la Élite</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestros profesionales son rigurosamente seleccionados para garantizar la máxima calidad y expertise.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-8">
              {professionals.map((prof) => (
                <div key={prof.id} className="flex flex-col items-center gap-2">
                    <Avatar className="w-24 h-24 border-2 border-primary">
                        <AvatarImage src={prof.imageUrl} alt={prof.name} data-ai-hint={prof.imageHint} />
                        <AvatarFallback>{prof.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                        <p className="text-sm font-medium leading-none">{prof.name}</p>
                        <p className="text-xs text-muted-foreground">{prof.specialty}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border mt-auto">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center mr-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 7L12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22V12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 7L12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17 4.5L7 9.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <span className="text-lg font-bold">AMATRIX</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">&copy; 2024 Agencia Amatrix. Todos los derechos reservados.</p>
            <nav className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                Política de Privacidad
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
