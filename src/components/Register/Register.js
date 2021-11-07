import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import useAuth from '../Hooks/UseAuth';
import { useState } from 'react'
import { useLocation, useHistory } from 'react-router';
import { updateProfile, getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import useFirebase from '../Hooks/UseFirebase';

const Register = () => {
    const { firebases } = useAuth();
    const [user, setUser, googleSignIn] = firebases;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const auth = getAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const signInGoogle = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user);
                history.push(redirect_url);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                setSuccess(true);
                updateName();
            })
            .catch(error => {
                setSuccess(false);
                setError(error.message);
            })
    }

    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(res => {

            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <Header></Header>
            <div className='my-5 text-center mx-auto signIn-container'>
                <h1 className="signIn-text pb-5">Create Account</h1>
                {
                    success && <div className="alert alert-success" role="alert">
                        User sign up successfully! Now user can sign in.
                    </div>
                }
                <form onSubmit={createUser}>
                    <input onBlur={(e) => setName(e.target.value)} className='form-control input-item' type="name" name="" placeholder='Enter Your Name' id="" required />
                    <br />
                    <input className='form-control input-item' onBlur={(e) => setEmail(e.target.value)} type="email" name="" placeholder='Enter Your Email' id="" required />
                    <br />
                    <input onBlur={(e) => setPassword(e.target.value)} className='form-control input-item' type="password" name="" placeholder='Enter Your Password' id="" required /><sapn className='text-danger'>{error}</sapn>
                    <br />
                    <input className='form-control input-item' type="password" name="" placeholder='Re-Enter Your Password' id="" />
                    <br />
                    <input className='form-control btn-submit' type="submit" value="Sign Up" />
                </form>
                <div className='pt-5'>
                    <h5>Alreay Have an Account? <Link to='/signIn'>Sign In</Link> </h5>
                </div>
                <div><h3 className='text-warning py-3'>-------------- or ---------------</h3></div>
                {/* google sign btn\ */}
                <button onClick={signInGoogle} className='btn-submit form-control mt-3'><i class="fab fa-google-plus-g"></i> <span>Google Sign In</span></button>
            </div>
            <Footer></Footer>
        </div>

    );

};

export default Register;