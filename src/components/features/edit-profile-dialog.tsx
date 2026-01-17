'use client';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useFirestore } from '@/firebase/provider';
import { doc, setDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { UserProfile } from '@/lib/types';
import { Edit } from 'lucide-react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

type Inputs = {
  name: string;
  avatarUrl: string;
  bannerUrl: string;
  bio?: string;
  specialty?: string;
};

export function EditProfileDialog({ profile }: { profile: UserProfile }) {
  const [open, setOpen] = useState(false);
  const firestore = useFirestore();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>({
    defaultValues: {
      name: profile.name,
      avatarUrl: profile.avatarUrl,
      bannerUrl: profile.bannerUrl,
      bio: profile.professionalDetails?.bio,
      specialty: profile.professionalDetails?.specialty,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!firestore || !profile.id) return;

    const updatedProfile: Partial<UserProfile> = {
      name: data.name,
      avatarUrl: data.avatarUrl,
      bannerUrl: data.bannerUrl,
    };

    if (profile.role === 'professional') {
      updatedProfile.professionalDetails = {
        ...profile.professionalDetails!,
        bio: data.bio || profile.professionalDetails!.bio,
        specialty: data.specialty || profile.professionalDetails!.specialty,
      };
    }
    
    const profileDocRef = doc(firestore, 'users', profile.id);

    setDoc(profileDocRef, updatedProfile, { merge: true }).catch(async (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: profileDocRef.path,
          operation: 'update',
          requestResourceData: updatedProfile,
        });
        errorEmitter.emit('permission-error', permissionError);
        toast({
            variant: 'destructive',
            title: 'Error de Permiso',
            description: 'No tienes permiso para actualizar este perfil.',
          });
      });

    toast({
      title: '¡Perfil actualizado!',
      description: 'Tus cambios han sido guardados.',
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="justify-start text-base"><Edit className="mr-2"/> Editar Perfil</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <Input id="name" {...register('name')} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="avatarUrl" className="text-right">
                Avatar URL
              </Label>
              <Input id="avatarUrl" {...register('avatarUrl')} className="col-span-3" />
            </div>
             <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bannerUrl" className="text-right">
                Banner URL
              </Label>
              <Input id="bannerUrl" {...register('bannerUrl')} className="col-span-3" />
            </div>
            {profile.role === 'professional' && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="specialty" className="text-right">
                    Especialidad
                  </Label>
                  <Input id="specialty" {...register('specialty')} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="bio" className="text-right">
                    Bio
                  </Label>
                  <Textarea id="bio" {...register('bio')} className="col-span-3" />
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
                <Button type="button" variant="secondary">Cancelar</Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
