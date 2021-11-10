import React from 'react';
import aboutUs from '../../images/about.webp';
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div>
            <div className="row container mx-auto justify-content-center align-items-center mt-5 py-5 g-2">
                <div className="col-lg-6 col-sm-12">
                    {/* about us section img  */}
                    <img src={aboutUs} className='w-100' alt="" />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className='ms-4 aboutUs-content'>
                        <h4>About Us</h4>
                        <h1>Get ready for real time adventure</h1>
                        <p className='fs-5 py-3 text-secondary'>Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</p>
                        <button className='btn-now'>Book Your Destination</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;