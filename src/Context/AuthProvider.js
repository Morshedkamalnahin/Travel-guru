import React, { createContext } from 'react';
import useFirebase from '../Components/Hooks/UseFirebase';

export const Context = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser, googleSignIn] = useFirebase();

    return (
        <Context.Provider value={{ firebases: [user, setUser, googleSignIn] }}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;