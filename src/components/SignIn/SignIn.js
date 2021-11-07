import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useAuth from '../Hooks/UseAuth';
import './SignIn.css';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { useHistory, useLocation } from 'react-router';

const SignIn = () => {
    const { firebases } = useAuth();
    const [user, setUser, googleSignIn] = firebases;

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const signInGoogle = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(redirect_url);
            })
    }

    const auth = getAuth();

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                setUser(res.user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <Header></Header>
            <div className='my-5 text-center  mx-auto signIn-container'>
                <h1 className="signIn-text pb-5">Please Sign In</h1>
                {
                    error && <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                }
                <form onSubmit={handleSignIn}>
                    <input onBlur={(e) => setEmail(e.target.value)} className='form-control input-item' type="email" name="" placeholder='Enter Your Email' id="" />
                    <br />
                    <input onBlur={(e) => setPassword(e.target.value)} className='form-control input-item' type="password" name="" placeholder='Enter Your Password' id="" />
                    <br />
                    <input className='form-control btn-submit' type="submit" value="Sign In" />
                </form>
                <div className='pt-5'>
                    <h5>New To Our Website? <Link to='/register'>Create Account</Link> </h5>
                </div>
                <div><h3 className='text-warning py-3'>-------------- or ---------------</h3></div>
                {/* google sign in btn\ */}
                <button onClick={signInGoogle} className='btn-submit form-control mt-3'><i class="fab fa-google-plus-g"></i> <span>Google Sign In</span></button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignIn;