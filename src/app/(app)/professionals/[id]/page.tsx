'use client';
import { useParams } from 'next/navigation';
import { useDoc } from '@/firebase/firestore/use-doc';
import { doc } from 'firebase/firestore';
import { useFirestore } from '@/firebase/provider';
import { UserProfile } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, MessageSquare, Briefcase, CalendarPlus } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

export default function ProfessionalProfilePage() {
  const { id } = useParams();
  const firestore = useFirestore();
  const professionalDocRef = useMemo(() => {
    if (!firestore || !id) return null;
    return doc(firestore, 'users', id as string);
  }, [firestore, id]);
  const { data: profile, isLoading } = useDoc<UserProfile>(professionalDocRef);

  if (isLoading) {
    return <div className="container mx-auto p-4 md:p-8">Cargando perfil del profesional...</div>;
  }

  if (!profile || profile.role !== 'professional') {
    return <div className="container mx-auto p-4 md:p-8">Profesional no encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
      <Card className="bg-card border-border overflow-hidden">
        <div className="relative h-48 bg-accent/30">
          <img src={profile.bannerUrl} alt={`Banner de ${profile.name}`} className="object-cover w-full h-full opacity-30" />
        </div>
        <CardHeader className="relative -mt-20 z-10">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6">
            <Avatar className="h-36 w-36 border-4 border-primary shadow-lg shrink-0">
              <AvatarImage src={profile.avatarUrl} alt={profile.name} />
              <AvatarFallback>{profile.name?.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="mt-4">
              <h1 className="text-4xl font-bold">{profile.name}</h1>
              <p className="text-xl text-primary font-medium">{profile.professionalDetails?.specialty}</p>
              <div className="mt-3 flex gap-2 justify-center md:justify-start">
                <Badge variant="secondary" className="text-sm">Profesional Verificado</Badge>
                <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{profile.professionalDetails?.rating}</span>
                    <span className="text-muted-foreground">({profile.professionalDetails?.reviews} reseñas)</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className='pt-6'>
            <div className="max-w-2xl">
                <h3 className="text-lg font-semibold mb-2">Acerca de mí</h3>
                <p className="text-muted-foreground">{profile.professionalDetails?.bio}</p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/agenda" passHref>
                    <Button size="lg" className="w-full sm:w-auto">
                        <CalendarPlus className="mr-2" /> Agendar una Cita
                    </Button>
                </Link>
                <Link href="/support" passHref>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        <MessageSquare className="mr-2" /> Enviar Mensaje
                    </Button>
                </Link>
            </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader>
            <CardTitle>Servicios Ofrecidos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {/* This should be fetched from a subcollection in a real app */}
              <li className="flex items-center justify-between p-4 bg-background rounded-lg border">
                <div>
                  <p className="font-semibold text-lg">Consultoría de Estrategia Digital</p>
                  <p className="text-sm text-muted-foreground">$150/hr - Sesión de 1 hora</p>
                </div>
                <Link href="/agenda"><Button variant="secondary">Agendar</Button></Link>
              </li>
              <li className="flex items-center justify-between p-4 bg-background rounded-lg border">
                <div>
                  <p className="font-semibold text-lg">Auditoría de UX/UI</p>
                  <p className="text-sm text-muted-foreground">$500 - Proyecto</p>
                </div>
                <Link href="/agenda"><Button variant="secondary">Agendar</Button></Link>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
            <CardHeader>
                <CardTitle>Reseñas de Clientes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-3 bg-background rounded-lg border">
                    <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm font-semibold mb-1">&quot;¡Increíble! Neo transformó completamente nuestra presencia online.&quot;</p>
                    <p className="text-xs text-muted-foreground">- Cliente Satisfecho</p>
                </div>
                 <div className="p-3 bg-background rounded-lg border">
                    <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm font-semibold mb-1">&quot;Un verdadero profesional. Entendió la visión y la ejecutó a la perfección.&quot;</p>
                    <p className="text-xs text-muted-foreground">- Otro Cliente Feliz</p>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
