import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, FacebookAuthProvider, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from './Firebase_init';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleUser = new GoogleAuthProvider();
    const githubUser = new GithubAuthProvider();
    const facebookUser = new FacebookAuthProvider();

    const existingUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false);
        })

        return () => {
            unSubscribe();
        }
    }, []);

    const userInfo = {
        user,
        loader,
        setLoader,
        createUser,
        googleUser,
        githubUser,
        facebookUser,
        logOutUser,
        existingUser,
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;