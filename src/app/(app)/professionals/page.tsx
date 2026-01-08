import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, SlidersHorizontal, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const allProfessionals = [
  {
    name: 'Neo Anderson',
    specialty: 'Arquitecto de Realidades Digitales',
    rating: 5,
    reviews: 720,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-1'),
  },
  {
    name: 'Trinity',
    specialty: 'Guardián de Ciberseguridad',
    rating: 5,
    reviews: 680,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-2'),
  },
  {
    name: 'Morpheus',
    specialty: 'Mentor de Potencial Humano',
    rating: 4.9,
    reviews: 850,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-3'),
  },
   {
    name: 'Oráculo',
    specialty: 'Estratega de Negocios Predictiva',
    rating: 5,
    reviews: 910,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-4'),
  },
  {
    name: 'Seraph',
    specialty: 'Protector de Activos Digitales',
    rating: 4.9,
    reviews: 615,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-5'),
  },
   {
    name: 'Niobe',
    specialty: 'Líder de Operaciones Logísticas',
    rating: 4.8,
    reviews: 540,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-6'),
  },
  {
    name: 'Cypher',
    specialty: 'Analista de Datos y Sistemas',
    rating: 4.7,
    reviews: 480,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-1'),
  },
  {
    name: 'Switch',
    specialty: 'Experta en Hardware y Redes',
    rating: 4.8,
    reviews: 410,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-2'),
  },
   {
    name: 'Tank',
    specialty: 'Operador de Infraestructura Virtual',
    rating: 4.9,
    reviews: 590,
    avatar: PlaceHolderImages.find((img) => img.id === 'avatar-3'),
  },
];


export default function ProfessionalsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Accede a la Fuerza de Élite</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Conecta con los profesionales más talentosos y verificados del mercado. Utiliza nuestros filtros avanzados para encontrar al experto perfecto para tu proyecto en segundos.</p>
      </header>

      <Card className="mb-8 p-4 bg-card/50 border-border">
        <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative w-full">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"/>
                 <Input placeholder="Buscar por especialidad, nombre o habilidad..." className="pl-10 h-12 text-lg"/>
            </div>
            <Button size="lg" className="w-full md:w-auto h-12 text-lg">
                <SlidersHorizontal className="mr-2 h-5 w-5" />
                Filtros Avanzados
            </Button>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {allProfessionals.map((prof, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 group">
                <CardHeader className="p-0">
                    <div className="relative h-52 w-full">
                        {prof.avatar &&
                         <Image src={prof.avatar.imageUrl} alt={prof.name} fill className="object-cover rounded-t-lg" data-ai-hint={prof.avatar.imageHint} />
                        }
                    </div>
                </CardHeader>
                <CardContent className="p-4 text-center">
                    <CardTitle className="text-xl mb-1">{prof.name}</CardTitle>
                    <p className="text-primary font-medium text-sm mb-2">{prof.specialty}</p>
                    <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
                        <span className="font-bold text-foreground">{prof.rating}</span>
                        <span>({prof.reviews} reseñas)</span>
                    </div>
                     <Link href="/profile" passHref className="w-full">
                        <Button className="mt-4 w-full" variant="outline">
                            Ver Perfil Completo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
