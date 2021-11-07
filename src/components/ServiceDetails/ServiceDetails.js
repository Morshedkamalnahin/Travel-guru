import React from 'react';
import { useParams } from 'react-router';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import './ServiceDetails.css';
import { serviceData } from '../../asset/serviceData';

const ServiceDetails = () => {
    const { servicId } = useParams();
    const [servicsDetails, setServicsDetails] = useState({});
    const { img, name } = servicsDetails;
    console.log(servicsDetails);
    useEffect(() => {
        const getServiceData = serviceData;
        // find single data\
        const signleData = getServiceData.find((item) => item.id == servicId)
        setServicsDetails(signleData)
    }, [servicId])
    return (
        <div>
            <Header></Header>
            
            <div className='container mx-auto d-flex justify-content-center align-items-center serviceDetails-container'>
                <div className='w-100'>
                    {
                        servicsDetails && <img src={img} className='serviceDetails-img' alt="" />
                    }

                </div>
                <div className='w-100 detailsContainer-info'>
                    <h1>{name}</h1>
                    <p>In-network providers discount their services in order to access patients through vision-plan directories. Out-of-network providers set aside budgets to leverage various marketing channels. Whatever you’re doing to bring new patients into your practice or optical shop, it comes at a cost. The best marketing strategies for eye care providers bring those costs down over time.

                        That’s why some providers turn to content marketing to build their online presence. Creating content doesn’t require a capital investment—just time—and it’s an effective way to strengthen relationships with current and potential patients. When you publish content to engage website prospects, you’re generating interest at minimal cost while establishing yourself as a thought leader in your community.</p>
                    <button className='btn-appointment'>Appoinment Now <span><i class="far fa-arrow-alt-circle-right"></i></span></button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;