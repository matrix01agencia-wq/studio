import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Zap, Users, Shield, Rocket } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { IntelligentSearch } from '@/components/features/intelligent-search';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const nexusHeroImage = PlaceHolderImages.find(p => p.id === 'nexus-hero');
const serviceDigitalImage = PlaceHolderImages.find(p => p.id === 'service-digital');
const serviceWellnessImage = PlaceHolderImages.find(p => p.id === 'service-wellness');
const serviceEntertainmentImage = PlaceHolderImages.find(p => p.id === 'service-entertainment');
const avatar1 = PlaceHolderImages.find(p => p.id === 'avatar-1');
const avatar2 = PlaceHolderImages.find(p => p.id === 'avatar-2');
const avatar3 = PlaceHolderImages.find(p => p.id === 'avatar-3');


const features = [
    {
      icon: Zap,
      title: 'Conexión Instantánea',
      description: 'Accede a una red de profesionales de élite listos para atender tus necesidades al momento.',
    },
    {
      icon: Users,
      title: 'Comunidad Exclusiva',
      description: 'Forma parte de un ecosistema de clientes y profesionales que buscan y ofrecen lo mejor.',
    },
    {
      icon: Shield,
      title: 'Confianza y Seguridad',
      description: 'Verificamos a cada profesional para garantizar un servicio de máxima calidad y confianza.',
    },
    {
        icon: Rocket,
        title: 'Gestión Inteligente',
        description: 'Nuestra plataforma aprende de tus preferencias para ofrecerte soluciones a medida.',
      },
  ];

  const sampleServices = [
    { id: '1', title: 'Asesoría en IA', category: 'Digital', image: serviceDigitalImage, professional: 'Dr. Evelyn Reed' },
    { id: '2', title: 'Entrenador Personal Holístico', category: 'Bienestar', image: serviceWellnessImage, professional: 'Kenji Tanaka' },
    { id: '3', title: 'Experiencia de DJ Futurista', category: 'Entretenimiento', image: serviceEntertainmentImage, professional: 'DJ Nova' },
  ];
  
  const sampleProfessionals = [
    { id: '1', name: 'Dr. Evelyn Reed', specialty: 'Estratega de IA', avatar: avatar1, rating: 5.0 },
    { id: '2', name: 'Kenji Tanaka', specialty: 'Coach de Bienestar', avatar: avatar2, rating: 4.9 },
    { id: '3', name: 'DJ Nova', specialty: 'Artista Musical', avatar: avatar3, rating: 5.0 },
  ];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
             {nexusHeroImage && <Image
                src={nexusHeroImage.imageUrl}
                alt={nexusHeroImage.description}
                fill
                className="object-cover object-center z-0"
                data-ai-hint={nexusHeroImage.imageHint}
                priority
            />}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-4 animate-fade-in-down">
              Bienvenido al <span className="text-primary">Nexus</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mb-8 animate-fade-in-up">
              La plataforma híbrida donde convergen los servicios de élite. Conecta, colabora y evoluciona.
            </p>
            <div className="w-full max-w-2xl animate-fade-in-up animation-delay-300">
                <IntelligentSearch />
            </div>
            <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-up animation-delay-600">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                <Link href="/register">Únete a la Élite</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center p-6 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow">
                  <feature.icon className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Servicios Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleServices.map((service) => (
                <Card key={service.id} className="overflow-hidden group">
                  <CardHeader className="p-0 relative h-60">
                    {service.image && <Image src={service.image.imageUrl} alt={service.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={service.image.imageHint}/>}
                  </CardHeader>
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-2">{service.category}</Badge>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground">Ofrecido por: {service.professional}</p>
                    <Button asChild variant="outline" className="mt-4 w-full">
                      <Link href={`/services/${service.id}`}>Ver Más <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Professionals Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestra Fuerza de Élite</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleProfessionals.map((prof) => (
                <Card key={prof.id} className="text-center p-6 flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4 border-4 border-primary">
                        {prof.avatar && <AvatarImage src={prof.avatar.imageUrl} alt={prof.name} data-ai-hint={prof.avatar.imageHint} />}
                        <AvatarFallback>{prof.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  <h3 className="text-xl font-bold">{prof.name}</h3>
                  <p className="text-primary mb-2">{prof.specialty}</p>
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    <Star className="w-5 h-5 fill-current" />
                    <span>{prof.rating.toFixed(1)}</span>
                  </div>
                  <Button asChild variant="default" className="mt-auto">
                    <Link href={`/profile/${prof.id}`}>Ver Perfil</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-muted-foreground mb-4 md:mb-0">&copy; {new Date().getFullYear()} Agencia Amatrix. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">Términos de Servicio</Link>
              <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
