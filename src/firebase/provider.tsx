'use client';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth } from 'firebase/auth';

interface FirebaseContextType {
  app: FirebaseApp | null;
  firestore: Firestore | null;
  auth: Auth | null;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(
  undefined
);

export function FirebaseProvider({
  children,
  firebaseApp,
}: {
  children: ReactNode;
  firebaseApp: {
    app: FirebaseApp;
    firestore: Firestore;
    auth: Auth;
  };
}) {
  const [app, setApp] = useState<FirebaseApp | null>(null);
  const [firestore, setFirestore] = useState<Firestore | null>(null);
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    setApp(firebaseApp.app);
    setFirestore(firebaseApp.firestore);
    setAuth(firebaseApp.auth);
  }, [firebaseApp]);

  return (
    <FirebaseContext.Provider value={{ app, firestore, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebaseApp = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebaseApp must be used within a FirebaseProvider');
  }
  return context.app;
};

export const useFirestore = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirestore must be used within a FirebaseProvider');
  }
  return context.firestore as Firestore;
};

export const useAuth = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a FirebaseProvider');
  }
  return context.auth as Auth;
};

export const useFirebase = () => useContext(FirebaseContext);
