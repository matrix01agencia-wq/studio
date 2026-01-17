'use client';
import { FirebaseProvider } from './provider';
import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth } from 'firebase/auth';
import { UserProvider } from './auth/use-user';

export function FirebaseClientProvider({
  children,
  firebaseApp,
}: {
  children: React.ReactNode;
  firebaseApp: {
    app: FirebaseApp;
    firestore: Firestore;
    auth: Auth;
  };
}) {
  return (
    <FirebaseProvider firebaseApp={firebaseApp}>
      <UserProvider>{children}</UserProvider>
    </FirebaseProvider>
  );
}
