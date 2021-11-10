import React from 'react';
import './WinterResort.css';
import winter1 from '../../images/winter1.webp';
import winter2 from '../../images/winter2.webp';
import winter3 from '../../images/winter3.webp';

const WinterResort = () => {
    return (
        <div className='mb-5'>
            <div className='text-center'>
                <h2 className='chooseYour-Text'>Choose Your</h2>
                <h1 className='winter-text'>Turist Resort</h1>
                <p className='fs-5'>We’ve swapped stories on beaches, buses, boats, and beyond! Our passion for travel shines. <br />We’ve swapped stories on beaches, buses, boats, </p>
            </div>
            <div className="row g-4 container mx-auto py-5">
                <div className="col-lg-4 col-sm-12">
                    <div className='winter-section'>
                        {/* resort img 1  */}
                        <img src={winter1} className='w-100 winter-img' alt="" />
                        <h4 className='winterImg-text'>Nepal</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className='winter-section'>
                        {/*  resort img 2  */}
                        <img src={winter2} className='w-100 winter-img' alt="" />
                        <h4 className='winterImg-text'>Turkey</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className='winter-section'>
                        {/*  resort img 3  */}
                        <img src={winter3} className='w-100 winter-img' alt="" />
                        <h4 className='winterImg-text'>Finland</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WinterResort;