'use client';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    type Auth 
} from "firebase/auth";
import { initializeFirebase } from "..";

function getFirebaseAuth(): Auth {
    const { auth } = initializeFirebase();
    if (!auth) {
        throw new Error('Firebase Auth is not initialized.');
    }
    return auth;
}

export const signUpWithEmail = (email:string, password:string):Promise<any> => {
    const auth = getFirebaseAuth();
    return createUserWithEmailAndPassword(auth, email, password);
}
export const signInWithEmail = (email:string, password:string):Promise<any> => {
    const auth = getFirebaseAuth();
    return signInWithEmailAndPassword(auth, email, password);
}
export const signOutUser = ():Promise<any> => {
    const auth = getFirebaseAuth();
    return signOut(auth);
}
