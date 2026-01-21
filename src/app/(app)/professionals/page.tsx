'use client';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, SlidersHorizontal, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { useCollection } from "@/firebase/firestore/use-collection";
import { collection, query, where } from "firebase/firestore";
import { useFirestore } from "@/firebase/provider";
import { useMemo } from "react";
import { UserProfile } from "@/lib/types";
export const dynamic = 'force-dynamic';

export default function ProfessionalsPage() {
  const firestore = useFirestore();

  const professionalsQuery = useMemo(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'users'), where('role', '==', 'professional'));
  }, [firestore]);

  const { data: allProfessionals, isLoading } = useCollection<UserProfile>(professionalsQuery);

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
            <Link href="/support">
                <Button size="lg" className="w-full md:w-auto h-12 text-lg">
                    <SlidersHorizontal className="mr-2 h-5 w-5" />
                    Filtros Avanzados
                </Button>
            </Link>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading && Array.from({ length: 8 }).map((_, index) => (
            <Card key={index} className="bg-card border-border">
                <CardHeader className="p-0">
                    <div className="relative h-52 w-full bg-muted rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4 text-center">
                    <div className="h-6 w-3/4 mx-auto bg-muted rounded-md mb-2"></div>
                    <div className="h-4 w-1/2 mx-auto bg-muted rounded-md mb-2"></div>
                    <div className="h-4 w-1/4 mx-auto bg-muted rounded-md"></div>
                </CardContent>
            </Card>
        ))}
        {allProfessionals?.map((prof) => (
            <Card key={prof.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 group">
                <CardHeader className="p-0">
                    <div className="relative h-52 w-full">
                        <Image src={prof.bannerUrl || PlaceHolderImages.find(p => p.id === 'service-digital')?.imageUrl!} alt={prof.name || 'professional banner'} fill className="object-cover rounded-t-lg" data-ai-hint="professional banner" />
                    </div>
                </CardHeader>
                <CardContent className="p-4 text-center">
                    <CardTitle className="text-xl mb-1">{prof.name}</CardTitle>
                    <p className="text-primary font-medium text-sm mb-2">{prof.professionalDetails?.specialty}</p>
                    <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
                        <span className="font-bold text-foreground">{prof.professionalDetails?.rating || 5}</span>
                        <span>({prof.professionalDetails?.reviews || 0} reseñas)</span>
                    </div>
                     <Link href={`/professionals/${prof.id}`} passHref className="w-full">
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
