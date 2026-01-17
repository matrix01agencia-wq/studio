'use client';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
} from "firebase/auth";
import { auth } from "@/firebase";

export const signUpWithEmail = (email:string, password:string):Promise<any> => {
    return createUserWithEmailAndPassword(auth, email, password);
}
export const signInWithEmail = (email:string, password:string):Promise<any> => {
    return signInWithEmailAndPassword(auth, email, password);
}
export const signOutUser = ():Promise<any> => {
    return signOut(auth);
}
