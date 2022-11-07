import React, { createContext, useEffect, useState } from 'react';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password)=>{
        
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin =(provider)=>{
        return signInWithPopup(auth,provider)
    }
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoader(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        loginUser,
        loader,
        googleLogin,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;