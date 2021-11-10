import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceData.css';

const ServiceData = (props) => {
    // destructing 
    const {_id, img, title, desc, location, price} = props.service;
    return (
        <div className='col-lg-4'>
            <div className='services-container p-2 pb-4'>
               <div>
               <img src={img} className='w-100 service-img' alt="" />
                <h6>${price}</h6>
               </div>
                <p className='service-location'><i class="fas fa-map-marker-alt mx-2"></i>{location}</p>
                <h4 className='py-2'>{title}</h4>
                <p>{desc}</p>
               <Link to={`/serviceDetails/${_id}`}>
                    <button className='btn-book'>Book Now</button>
               </Link>
            </div>
        </div>
    );
};

export default ServiceData;