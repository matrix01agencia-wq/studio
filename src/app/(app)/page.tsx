'use client';
import { useUser } from '@/firebase/auth/use-user';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * This page serves as the entry point for the authenticated app section.
 * It redirects users to their profile if they are logged in, or back to the
 * public landing page if they are not. This avoids route conflicts with
 * the main landing page at `src/app/page.tsx`.
 */
export default function AppRootPage() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // If user is logged in, go to their profile
        router.replace('/profile');
      } else {
        // If not logged in, go to the public home page
        router.replace('/');
      }
    }
  }, [user, loading, router]);

  // Display a loading indicator while checking auth status
  return (
    <div className="flex h-screen w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground">Cargando tu experiencia...</p>
        </div>
    </div>
  );
}

export default function Page() {
    return (
        <main>
              <h1>Funciona</h1>
                  </main>
                    );
                    }
                    
}