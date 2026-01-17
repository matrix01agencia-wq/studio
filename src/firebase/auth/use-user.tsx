'use client';
import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useAuth, useFirestore } from '../provider';
import { doc } from 'firebase/firestore';
import { UserProfile } from '@/lib/types';
import { useDoc } from '../firestore/use-doc';

export type UserContextType = {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  profile: null,
  loading: true,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const firestore = useFirestore();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const userDocRef = useMemo(() => {
    if (!user || !firestore) return null;
    return doc(firestore, 'users', user.uid);
  }, [user, firestore]);

  const { data: profile, isLoading: profileLoading } = useDoc<UserProfile>(userDocRef);

  const value = {
    user,
    profile,
    loading: loading || (user != null && profileLoading),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider.');
  }
  return context;
};
