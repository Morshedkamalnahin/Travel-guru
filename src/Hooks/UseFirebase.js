import { useEffect, useState } from "react"
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile} from 'firebase/auth'
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')

    const auth= getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUser('');
            localStorage.removeItem('loginData');
        })
    }

    useEffect( () => {
        onAuthStateChanged(auth, user=> {
            if(user){
                setUser(user)
            }
        })
    }, [])

    return{
        user, setUser, googleSignIn, logOut, error, setError
    }
}

export default useFirebase;