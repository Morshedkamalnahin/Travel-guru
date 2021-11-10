import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css';

const Login = () => {
    const {googleSignIn, setUser, error, setError} = useFirebase();
    
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/home';
    
    // google sign in btn 
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            setUser(result.user);

            localStorage.setItem('loginData', JSON.stringify( result.user))
            console.log(result.user);
            history.push(redirect_url);
            
            setError('');
        })
        .catch(error =>{
            setError(error.message)
        })
    }
    return (
        <div>
            <Header></Header>
           <div className=' mx-auto form-control my-5 p-4 from-container'>
               <h1 className='text-center text-primary py-4 pb-5'>Please Log In</h1>
               <p>{error}</p>
               {/* login form  */}
               <form>
                   <input className='form-control' type="email" name="" placeholder='Enter Your Email' id="" />
                   <br />
                   <input className='form-control' type="password" name="" placeholder='Enter Your Password' id="" />
                   <br />
                   <input className='form-control' type="submit" value="Submit" />
               </form>
               <h5 className='pt-5 text-center'>Don't Have Account? <Link to='/register'>Create new account</Link></h5>
               <div className='text-center fs-3 py-4 text-primary'>--------------or-------------</div>
               <button onClick={handleGoogleSignIn} className='w-100 py-2 btn-now'><i class="fab fa-google-plus-g"></i> <span className='ms-2'>Google Sign In</span></button>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Login;