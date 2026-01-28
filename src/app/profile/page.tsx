'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase/auth/use-user';
import { Skeleton } from '@/components/ui/skeleton';

export default function ProfileRedirectPage() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace(`/profile/${user.uid}`);
      } else {
        router.replace('/login');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="p-8">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
    </div>
  );
}
