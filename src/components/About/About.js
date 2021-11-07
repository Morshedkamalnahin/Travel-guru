import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import aboutImg from '../../aboutimg.jpg';
import './About.css';
import Doctor from '../Doctor/Doctor';

const About = () => {
    // destructering
    const [doctors, setDoctor] = useState([])
    // data load\
    useEffect( () => {
        fetch('Doctor.json')
        .then(res => res.json())
        .then(data => setDoctor(data))
    },[])
    return (
        <div>
            <Header></Header>
            
           <div className='container mx-auto py-5 shadow-lg rounded-3 my-5 px-5'>
               <h5 className='text-center py-3 fs-4 about-title'>The leading provider of quality vision care and personalized optometric services in London. <br />Our focus is on providing the very best patient care possible.</h5>
              <div className='text-center py-2'>
              <img src={aboutImg} className='about-img rounded-3' alt="" />
              </div>
              <br />
               <div className='text-center'>
               <button className='btn-seeClinic'>SEE CLINIC SHOWCASE</button>
               </div>
               <hr />
                <div className='text-center py-2 about-title'>
                    <h1>OUR MISSION AND VISION</h1>
                    <span>The mission of Dr. Brock and his highly-trained, experienced staff is to provide the highest quality of care using the safest, most advanced and minimally invasive techniques.</span>
                    <div className="row gy-3 py-5">
                        <div className="col-lg-4 col-sm-12">
                            <div className='about-card'>
                                <h4>EXCELLENT TREATMENTS</h4>
                                <p>We treat patients with respect are compassionate, thoughtful responsive to their needs and sensitive to ensuring the comfort.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className='about-card'>
                                <h4>INTEGRATING TEACHING</h4>
                                <p>We ethically, accept personal accountability, communicate openly and honestly and treat everyone with trust and respect.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className='about-card'>
                                <h4>WORKFORCE CAPABILITY</h4>
                                <p>We communicate openly, respect diversity of views and skills and work effectively with partners and in multi-disciplinary teams.</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

           <div className='shadow-lg rounded-3 py-5 my-5 container mx-auto'>
                <h2 className='text-center doctorSection-title py-5'>Our <span>Critical Eye Care Hospital</span> Doctors</h2>
                {/* doctor team page\ */}
                <div className="mx-auto row g-4 py-5">
                    {
                        doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                        ></Doctor>)
                    }
                </div>
           </div>
           {/* footer section\ */}
           <Footer></Footer>
        </div>
    );
};

export default About;