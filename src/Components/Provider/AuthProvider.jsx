 import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user,setUser]=useState(null);

    const createUser =(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth)
    }

  

    const authData = {
        createUser,
        signIn,
        logOut,
        user,
        setUser,
        loading,
       
    };
    
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;