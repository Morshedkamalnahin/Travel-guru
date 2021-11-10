import React from 'react';
import logo from '../../../src/images/logo/logo.png';
import useFirebase from '../../Hooks/UseFirebase';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    const {user, logOut} = useFirebase()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary mb-2">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    {/* header logo  */}
                    {/* <img src={logo} className='w-25' alt="" /> */}
                        <h2 className='mt-2 logo-text'><sapn className='logoFrist-text'>T</sapn>ravel <span className="logoFirst-text">G</span>uru</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* nav ul  */}
                <ul className="navbar-nav ms-auto mb-lg-0 mt-2 ">
                    <li className="nav-item">
                    <Link className="nav-link fs-5 mx-1 fw-normal text-dark" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link fs-5 mx-1 fw-normal text-dark" to="/about">About</Link>
                    </li>
                   {user?.email && <li className="nav-item">
                    <Link className="nav-link fs-5 mx-1 fw-normal text-dark" to="/myOrders">My Orders</Link>
                    </li>}
                   {user?.email && <li className="nav-item">
                    <Link className="nav-link fs-5 mx-1 fw-normal text-dark" to="/manageOrders">Manage All orders</Link>
                    </li>}
                   {user?.email && <li className="nav-item">
                    <Link className="nav-link fs-5 mx-1 fw-normal text-dark" to="/addServices">Add new Services</Link>
                    </li>}
                   { user?.email ?<li className="nav-item">
                    <Link className="nav-link fs-5 mx-1 fw-normal text-dark logIn-btn" to="/logIn" onClick={logOut}>Log Out</Link>
                   
                    </li> :<li className="nav-item">
                    <Link className="nav-link fs-5 mx-1 fw-normal text-dark logIn-btn" to="/logIn">Log In</Link>
                    </li>}
                    {
                        user?.email && <span className='mt-3'>{user.displayName}</span>
                    }
                    
                </ul>
                </div>
            </div>
            </nav>
            <hr className='p-0 m-0' />
        </div>
    );
};

export default Header;