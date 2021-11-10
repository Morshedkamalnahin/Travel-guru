import React from 'react';
import slider1 from '../../images/banner1.webp';
import slider2 from '../../images/banner2.webp';
import slider3 from '../../images/banner3.webp';
import './Slider.css';


const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="container carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* slider img 1  */}
                        <img src={slider1} className="d-block w-100 slider-img" alt="..." />
                        <div className='text-center slider-content'>
                            <h1>Nepal</h1>
                            <p> travel is an experiential product and the best way to get people thinking about travel is to show them fun places to go and fun things they can do while they are there.</p>
                            <button className='btn-now'>Explore Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* slider img 2  */}
                        <img src={slider2} className="d-block w-100  slider-img" alt="..." />
                        <div className='text-center slider-content'>
                            <h1>Turkey</h1>
                            <p> travel is an experiential product and the best way to get people thinking about travel is to show them fun places to go and fun things they can do while they are there.</p>
                            <button className='btn-now'>Explore Now</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        {/* slider img 3  */}
                        <img src={slider3} className="d-block w-100  slider-img" alt="..." />
                        <div className='text-center slider-content'>
                            <h1>New-zeland</h1>
                            <p> travel is an experiential product and the best way to get people thinking about travel is to show them fun places to go and fun things they can do while they are there.</p>
                            <button className='btn-now'>Explore Now</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;