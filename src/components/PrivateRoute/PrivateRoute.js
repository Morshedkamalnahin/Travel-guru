import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../Hooks/UseFirebase';

const PrivateRoute = ({children, ...rest}) => {
    const {user} = useFirebase();
    const loginData = JSON.parse (localStorage.getItem('loginData'));
    console.log(loginData);
    return (
        <Route
        {...rest}
        render={({ location }) =>
       loginData ? (
        children
        ) : (
        <Redirect
            to={{
            pathname: "/logIn",
            state: { from: location }
            }}
            />
        )
        }
        />
    );
};

export default PrivateRoute;