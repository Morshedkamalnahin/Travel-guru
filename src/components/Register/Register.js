import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Register = () => {
    const { googleSignIn, setUser, user, setError, error } = useFirebase()
    const handleGoogleSign = () => {
        googleSignIn()
            .then(res => {
                setUser(res.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div>
            <Header></Header>
            <div className='w-50 mx-auto form-control my-5 p-4'>
                <h1 className='text-center text-primary py-4 pb-5'>Please Register</h1>
                <p>{error}</p>
                <form>
                    <input className='form-control' type="text" placeholder='Enter Your Name' />
                    <br />
                    <input className='form-control' type="email" name="" placeholder='Enter Your Email' id="" />
                    <br />
                    <input className='form-control' type="password" name="" placeholder='Enter Your Password' id="" />
                    <br />
                    <input className='form-control' type="submit" value="Submit" />
                </form>
                <h5 className='pt-5 text-center'>Already Have Account? <Link to='/logIn'>Please Log In</Link></h5>
                <div className='text-center fs-3 py-4 text-primary'>--------------or-------------</div>
                <button onClick={handleGoogleSign} className='w-100 py-2 btn-now'><i class="fab fa-google-plus-g"></i> <span className='ms-2'>Google Sign In</span></button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;