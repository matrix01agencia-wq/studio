'use client';

import { useMemo } from 'react';
import { useFirestore } from '@/firebase/provider';
import { doc } from 'firebase/firestore';
import { useDoc } from '@/firebase/firestore/use-doc';
import { UserProfile } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Mail, Phone, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUser } from '@/firebase/auth/use-user';
import Image from 'next/image';
import { EditProfileDialog } from '@/components/features/edit-profile-dialog';

function ProfileSkeleton() {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <Skeleton className="h-48 w-full rounded-lg" />
            <div className="relative -mt-16 ml-8 flex items-end">
                <Skeleton className="h-32 w-32 rounded-full border-4 border-background" />
            </div>
            <div className="mt-4 space-y-2">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>
        </div>
    )
}

export default function UserProfilePage({ params }: { params: { userId: string } }) {
  const firestore = useFirestore();
  const { user: currentUser } = useUser();
  const { userId } = params;

  const profileDocRef = useMemo(() => {
    if (!firestore || !userId) return null;
    return doc(firestore, 'users', userId);
  }, [firestore, userId]);

  const { data: profile, isLoading } = useDoc<UserProfile>(profileDocRef);

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (!profile) {
    return <div className="text-center p-8">Perfil no encontrado.</div>;
  }
  
  const isOwner = currentUser?.uid === profile.id;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      {/* Banner y Avatar */}
      <div className="relative mb-24">
        <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden bg-card">
           {profile.bannerUrl && <Image
                src={profile.bannerUrl}
                alt={`${profile.name}'s banner`}
                fill
                className="object-cover"
                data-ai-hint="abstract background"
            />}
        </div>
        <div className="absolute top-full left-8 -translate-y-1/2 transform">
          <Avatar className="h-32 w-32 sm:h-40 sm:w-40 border-4 border-background shadow-lg">
            <AvatarImage src={profile.avatarUrl} alt={profile.name} data-ai-hint="person avatar"/>
            <AvatarFallback className="text-4xl">{profile.name?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Nombre y acciones */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
        <div className="sm:ml-[calc(10rem+2rem)] lg:ml-[calc(11rem+2rem)] mt-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{profile.name}</h1>
          <p className="text-muted-foreground text-lg capitalize">{profile.role}</p>
        </div>
        <div className="mt-4 sm:mt-0">
          {isOwner ? (
            <EditProfileDialog profile={profile} />
          ) : (
            <Button>Contactar</Button>
          )}
        </div>
      </div>
      
      {/* Contenido del perfil */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna izquierda: Detalles */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Detalles de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm">{profile.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">No disponible</span>
              </div>
               <div className="flex items-center gap-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Ubicación no especificada</span>
              </div>
            </CardContent>
          </Card>
           {profile.role === 'professional' && profile.professionalDetails && (
             <Card>
                <CardHeader>
                    <CardTitle>Información Profesional</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex items-center gap-4">
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm font-semibold">{profile.professionalDetails.specialty}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Star className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm">{profile.professionalDetails.rating.toFixed(1)} ({profile.professionalDetails.reviews} reseñas)</span>
                    </div>
                </CardContent>
             </Card>
           )}
        </div>

        {/* Columna derecha: Bio y Servicios */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Biografía</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {profile.professionalDetails?.bio || 'Este usuario aún no ha añadido una biografía.'}
              </p>
            </CardContent>
          </Card>
          
           {profile.role === 'professional' && (
            <Card>
                <CardHeader>
                <CardTitle>Servicios Ofrecidos</CardTitle>
                </CardHeader>
                <CardContent>
                {/* Placeholder para la lista de servicios */}
                <p className="text-muted-foreground">Este profesional aún no ha listado sus servicios.</p>
                </CardContent>
            </Card>
           )}
        </div>
      </div>
    </div>
  );
}
