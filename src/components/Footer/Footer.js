import React from 'react';
import logo from '../../images/logo/logo.png'

const Footer = () => {
    return (
        <div className='bg-primary py-5'>
            <div className="row container mx-auto">
                <div className="col-lg-3 col-sm-12">
                    <div className='text-center mt-3'>
                        {/* footer logo  */}
                        <h2 className='text-white'>Travel Guru</h2>
                        <p className='text-white pt-2'>If you don’t have photos of your own, Flickr is a great spot to find amazing shots of every type of destination around the world..</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className='text-center mt-4'>
                  <h4 className='text-white'>Company</h4>
                    <nav>
                        <ul className='list-unstyled text-white'>
                            <li className='pb-3 pt-2 fs-5'>Pricing</li>
                            <li className='pb-3 fs-5'>About</li>
                            <li className='pb-3 fs-5'>Gallery</li>
                            <li className=' fs-5'>Contact</li>
                        </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className='text-center mt-4'>
                        <h4 className='text-white'>Popular Destination</h4>
                        <nav>
                            <ul className='list-unstyled text-white'>
                                <li className='pb-3 pt-2 fs-5'>Canada</li>
                                <li className='pb-3 fs-5'>Indonessia</li>
                                <li className='pb-3 fs-5'>Swizerland</li>
                                <li className='pb-3 fs-5'>America</li>
                                <li className=' fs-5'>Germany</li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <div className='mt-4 text-white ms-2'>
                        <h4 className='text-white pb-3'>Contact Us</h4>
                        <h6 className='fs-5 pb-2'><i class="fas fa-envelope"></i> <span className='ms-1'>mknahin2000@gmail.com</span></h6>
                        <h6 className='fs-5 pb-2'><i class="fas fa-phone-square-alt"></i> <span className='ms-1'>+880 1840225535</span></h6>
                        <h6 className='fs-5 pb-2'><i class="fas fa-map-marker-alt"></i> <span className='ms-1'>Cox's Bazar,Chittagong,<br />
                            Bangladesh</span></h6>
                    </div>
                    <div>
                        <nav>
                            <ul className='list-unstyled d-flex text-white pt-2'>
                                <li className='mx-3 fs-4'><i class="fab fa-facebook"></i></li>
                                <li className='mx-3 fs-4'><i class="fab fa-instagram"></i></li>
                                <li className='mx-3 fs-4'><i class="fab fa-twitter"></i></li>
                                <li className='mx-3 fs-4'><i class="fab fa-pinterest"></i></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;