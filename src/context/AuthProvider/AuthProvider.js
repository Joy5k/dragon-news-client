import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext(); 
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
    // start useEffects function
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
           }
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
},[])
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const LogInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const UpdateUserProfile = profile => {
        return updateProfile(auth.currentUser,profile)
    }
    const authInfo={user,setLoading,verifyEmail,UpdateUserProfile,providerLogin,logOut,createUser,LogInUser,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;