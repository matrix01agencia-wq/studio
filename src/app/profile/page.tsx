'use client';
import { useUser } from '@/firebase/auth/use-user';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { EditProfileDialog } from '@/components/features/edit-profile-dialog';
import { Star, MapPin, Briefcase, UserPlus } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

function ProfileSkeleton() {
    return (
        <div className="p-4 md:p-8 space-y-8">
            <Card className="relative h-48 md:h-64">
                <Skeleton className="w-full h-full" />
                <div className="absolute bottom-0 left-8 transform translate-y-1/2">
                    <Skeleton className="w-32 h-32 rounded-full border-4 border-background" />
                </div>
            </Card>
            <div className="pt-20 pb-4 px-8 flex justify-between items-center">
                <div>
                    <Skeleton className="h-8 w-48 mb-2" />
                    <Skeleton className="h-6 w-32" />
                </div>
                <div>
                    <Skeleton className="h-10 w-32" />
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 px-8">
                <div className="md:col-span-2 space-y-8">
                    <Card>
                        <CardHeader><Skeleton className="h-6 w-24" /></CardHeader>
                        <CardContent><Skeleton className="h-20 w-full" /></CardContent>
                    </Card>
                </div>
                <div>
                    <Card>
                        <CardHeader><Skeleton className="h-6 w-32" /></CardHeader>
                        <CardContent className="space-y-4">
                           <Skeleton className="h-6 w-full" />
                           <Skeleton className="h-6 w-full" />
                           <Skeleton className="h-6 w-full" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}


export default function ProfilePage() {
  const { user, profile, loading } = useUser();

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (!user || !profile) {
    return (
         <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <h2 className="text-2xl font-semibold mb-4">Perfil no encontrado</h2>
            <p className="text-muted-foreground mb-6">Debes iniciar sesión para ver tu perfil.</p>
            <Button asChild>
                <a href="/login">Iniciar Sesión</a>
            </Button>
        </div>
    );
  }

  return (
    <div className="p-4 md:p-8 space-y-8">
      <Card className="relative h-48 md:h-64 w-full">
         {profile.bannerUrl && 
            <Image
                src={profile.bannerUrl}
                alt="Banner del perfil"
                fill
                className="object-cover"
                data-ai-hint="profile banner"
            />
         }
        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
          <Avatar className="w-32 h-32 border-4 border-background">
            <AvatarImage src={profile.avatarUrl} alt={profile.name} data-ai-hint="person avatar"/>
            <AvatarFallback className="text-4xl">{profile.name?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </Card>
      
      <div className="pt-20 pb-4 px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          {profile.role === 'professional' && profile.professionalDetails && (
            <p className="text-xl text-muted-foreground">{profile.professionalDetails.specialty}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline"><UserPlus className="mr-2"/> Conectar</Button>
            <EditProfileDialog profile={profile} />
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 px-8">
        <div className="md:col-span-2 space-y-8">
            {profile.role === 'professional' && profile.professionalDetails && (
                <Card>
                    <CardHeader>
                        <CardTitle>Acerca de mí</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{profile.professionalDetails.bio}</p>
                    </CardContent>
                </Card>
            )}

            <Card>
                <CardHeader>
                    <CardTitle>Servicios</CardTitle>
                    <CardDescription>Explora los servicios que ofrezco.</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for services list */}
                    <div className="text-center text-muted-foreground py-8">
                        <Briefcase className="mx-auto h-12 w-12 mb-4" />
                        <p>Los servicios aparecerán aquí próximamente.</p>
                    </div>
                </CardContent>
            </Card>

        </div>
        <div className="space-y-8">
            {profile.role === 'professional' && profile.professionalDetails && (
                <Card>
                    <CardHeader>
                        <CardTitle>Estadísticas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center">
                            <Star className="w-5 h-5 mr-3 text-primary fill-primary" />
                            <span className="font-semibold">{profile.professionalDetails.rating.toFixed(1)}</span>
                            <span className="ml-2 text-muted-foreground">({profile.professionalDetails.reviews} reseñas)</span>
                        </div>
                         <div className="flex items-center">
                            <MapPin className="w-5 h-5 mr-3 text-muted-foreground" />
                            <span>Ubicación Remota</span>
                        </div>
                         <div className="flex items-center">
                            <Briefcase className="w-5 h-5 mr-3 text-muted-foreground" />
                            <span>+50 Proyectos completados</span>
                        </div>
                    </CardContent>
                </Card>
            )}
             <Card>
                <CardHeader>
                    <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Email:</span> {profile.email}
                   </p>
                   <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Miembro desde:</span> {new Date(profile.createdAt).toLocaleDateString()}
                   </p>
                </CardContent>
            </Card>
        </div>
      </div>

    </div>
  );
}
