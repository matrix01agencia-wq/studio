import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IntelligentSearch } from '@/components/features/intelligent-search';
import { ShieldCheck, Zap, HeartHandshake, ArrowRight, Star } from 'lucide-react';

const featuredServices = [
    {
        id: 'digital',
        title: 'Ecosistema Digital 360°',
        description: 'Desde consultoría y diseño hasta marketing y desarrollo web. Tu presencia digital, reinventada.',
        image: PlaceHolderImages.find((p) => p.id === 'service-digital'),
    },
    {
        id: 'wellness',
        title: 'Bienestar y Educación de Élite',
        description: 'Coaching, psicología, nutrición y más. Invierte en ti con los mejores expertos.',
        image: PlaceHolderImages.find((p) => p.id === 'service-wellness'),
    },
    {
        id: 'entertainment',
        title: 'Entertainment Hub Premium',
        description: 'Shows, DJs, y producción de eventos en vivo. Crea experiencias inolvidables.',
        image: PlaceHolderImages.find((p) => p.id === 'service-entertainment'),
    },
];

const featuredProfessionals = [
    {
        name: 'Neo Anderson',
        specialty: 'Arquitecto de Realidades Digitales',
        avatar: PlaceHolderImages.find((p) => p.id === 'avatar-1'),
        rating: 5,
        reviews: '500+',
    },
    {
        name: 'Trinity',
        specialty: 'Guardián de Ciberseguridad',
        avatar: PlaceHolderImages.find((p) => p.id === 'avatar-2'),
        rating: 5,
        reviews: '500+',
    },
    {
        name: 'Morpheus',
        specialty: 'Mentor de Potencial Humano',
        avatar: PlaceHolderImages.find((p) => p.id === 'avatar-3'),
        rating: 4.9,
        reviews: '500+',
    },
];

const heroImage = PlaceHolderImages.find((img) => img.id === 'nexus-hero');

export default function Page() {
    return (
        <main className="flex-1 overflow-auto bg-background">
            {/* Hero Section */}
            <div className="relative h-[80vh] min-h-[700px] flex items-center justify-center text-center p-4">
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

                <div className="relative z-10 flex flex-col items-center gap-6 text-white max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter">La Plataforma Definitiva para Servicios de Élite</h1>
                    <p className="max-w-3xl text-lg md:text-xl text-foreground/80">
                        Accede a una red exclusiva de profesionales verificados y lleva tus proyectos al siguiente nivel. Rápido, seguro y eficiente.
                    </p>
                    <IntelligentSearch />

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link href="/register/client" passHref>
                            <Button size="lg" className="text-lg h-12 px-8">Registrarme como Cliente</Button>
                        </Link>
                        <Link href="/register/professional" passHref>
                            <Button size="lg" variant="outline" className="text-lg h-12 px-8 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">Soy un Profesional</Button>
                        </Link>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm text-muted-foreground">
                            ¿Ya tienes una cuenta?{' '}
                            <Link href="/login" className="font-semibold text-primary hover:underline">
                                Inicia Sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Amatrix Section */}
            <section className="bg-card/50 py-16 md:py-24">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-primary tracking-tight">¿Por Qué Elegir Amatrix?</h2>
                        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-lg">No somos solo un directorio. Somos tu socio estratégico para el éxito.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center p-6">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <ShieldCheck className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Verificación de Élite</h3>
                            <p className="text-muted-foreground text-base">Cada profesional pasa por un riguroso proceso de validación. Solo los mejores llegan aquí.</p>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <Zap className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Conexión Instantánea</h3>
                            <p className="text-muted-foreground text-base">Nuestra IA te conecta con el experto ideal en segundos. Di adiós a la búsqueda interminable.</p>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <HeartHandshake className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Soporte y Garantía</h3>
                            <p className="text-muted-foreground text-base">Tu satisfacción es nuestra prioridad. Ofrecemos soporte 24/7 y garantía en cada servicio.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Featured Services & Professionals Section */}
            <div className="bg-background py-16 md:py-24 space-y-24">
                <section className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-primary tracking-tight">Un Universo de Soluciones a tu Alcance</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featuredServices.map((service) => (
                            <Card key={service.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 flex flex-col group shadow-lg hover:shadow-primary/20">
                                <div className="relative h-60 w-full overflow-hidden">
                                    {service.image && 
                                        <Image
                                            src={service.image.imageUrl}
                                            alt={service.image.description}
                                            fill
                                            className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                                            data-ai-hint={service.image.imageHint}
                                        />
                                    }
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-base">{service.description}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/services" passHref className="w-full">
                                        <Button variant="outline" className="w-full mt-4 text-base h-11 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                                            Descubrir Más <ArrowRight className="ml-2" />
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </section>
            
                <section className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-primary tracking-tight">Conoce a la Fuerza de Élite</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {featuredProfessionals.map((prof) => (
                            <Card key={prof.name} className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-primary/20">
                                 <CardContent className="p-8 flex flex-col items-center text-center">
                                    {prof.avatar && (
                                        <Avatar className="h-28 w-28 border-4 border-accent mb-5">
                                            <AvatarImage src={prof.avatar.imageUrl} alt={prof.name} data-ai-hint={prof.avatar.imageHint} />
                                            <AvatarFallback>{prof.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div className="space-y-1.5 flex-grow">
                                        <CardTitle className="text-2xl">{prof.name}</CardTitle>
                                        <p className="text-base text-primary font-medium">{prof.specialty}</p>
                                        <div className="flex items-center justify-center gap-1.5 pt-2 text-muted-foreground">
                                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                            <span className="text-base font-bold text-foreground">{prof.rating}</span>
                                            <span className="text-sm ml-1">({prof.reviews} servicios)</span>
                                        </div>
                                    </div>
                                     <Link href="/professionals" passHref className="w-full">
                                        <Button variant="ghost" className="mt-6 w-full text-primary hover:text-primary h-11 text-base">
                                            Ver Perfil <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-16">
                         <Link href="/professionals" passHref>
                            <Button variant="default" size="lg" className="text-lg h-14 px-10">
                                Explora el Directorio Completo <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default function Page() {
  return (
    <main>
      <h1>App funcionando 🚀</h1>
    </main>
  );
}
