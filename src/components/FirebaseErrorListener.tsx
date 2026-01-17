'use client';
import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { useToast } from '@/hooks/use-toast';

export function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const handlePermissionError = (error: FirestorePermissionError) => {
      console.error('Firestore Permission Error:', error.toContextObject());
      // In a real app, you might use a more sophisticated logging service
      // For the dev experience, we'll throw to show the Next.js overlay
      if (process.env.NODE_ENV === 'development') {
        throw error;
      } else {
        // In production, just show a generic toast
        toast({
          variant: 'destructive',
          title: 'Error de Permiso',
          description: 'No tienes los permisos necesarios para realizar esta acción.',
        });
      }
    };

    errorEmitter.on('permission-error', handlePermissionError);

    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, [toast]);

  return null; // This component does not render anything
}
