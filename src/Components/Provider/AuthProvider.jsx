 import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../../firebase.config';
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

    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    const signInWithPopupFunc =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const sendPasswordResetEmailFunc =(email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(createUser)=>{
            setUser(createUser);
            setLoading(false);
        });
        return()=>{
            unsubscribe();
        }
    },[]);

    const authData = {
        createUser,
        signIn,
        logOut,
        user,
        setUser,
        loading,
        updateUser,
        signInWithPopupFunc,
        sendPasswordResetEmailFunc
    };
    
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;