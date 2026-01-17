'use client';
import { FirebaseProvider } from './provider';
import { UserProvider } from './auth/use-user';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FirebaseProvider>
      <UserProvider>{children}</UserProvider>
    </FirebaseProvider>
  );
}
