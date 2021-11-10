import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ServiceData from '../ServiceData/ServiceData';
import './Servicess.css';

const Servicess = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // data load 
        fetch('https://safe-tor-97464.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-5 py-5'>
            <h1 className='text-center service-title'>Our Offer</h1>
            {
                !services.length ? <div className="text-center">
                    {/* spinner  */}
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div> : <div className="row cols-lg-4 cols-md-6 cols-sm-12 g-4 container mx-auto">
                    {
                        services?.map(service => <ServiceData key={service._id} service={service} />)
                    }
                </div>
            }
        </div>
    );
};

export default Servicess;