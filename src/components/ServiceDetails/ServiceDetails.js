import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useForm} from "react-hook-form";
import useFirebase from '../../Hooks/UseFirebase';
import swal from 'sweetalert';




const ServiceDetails = () => {

    const { user } = useFirebase()

    const { serviceId } = useParams();
    const [singleService, setSingleService] = useState({})

    const [name, setUsername] = useState('');
    const [email, setUseremail] = useState('');
    const [destination, setdestination] = useState('');
    const [number, setNumber] = useState();

    const { _id, img, price, title, desc, location } = singleService;
    useEffect(() => {
        const url = `https://safe-tor-97464.herokuapp.com/register/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])

    const handleRegister = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const address = location;
        const charge = price;
        const phone = number;
        const status = 'Pending';

        const regService = { name, email, address, charge, phone, status };
        fetch('https://safe-tor-97464.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(regService)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your offer successfuly submit')
                    e.target.reset();
                }
            })

    };

    return (
        <div>
            <Header></Header>
            <div className='py-5'>
                <h1 className='text-center service-title fs-1'>Our Offer Details</h1>
                <div className="row container mx-auto g-3">
                    <div className="col-lg-6">
                        <div className='p-4 py-5 border border-2 text-center'>
                            <h3 className='pb-4'>Please Place Your Offer</h3>
                            <form className='w-100 d-flex flex-column mx-auto' onSubmit={handleRegister}>
                                <input onBlur={(e) => setUsername(e.target.value)} type="text" placeholder="Full Name" defaultValue={user.displayName} required /><br />

                                <input onBlur={(e) => setUseremail(e.target.value)} type="email" placeholder="Email" defaultValue={user.email} required /><br />

                                <input type="text" placeholder="Service title" defaultValue={title} /><br />
                                <input onBlur={(e) => setdestination(e.target.value)} defaultValue={location} type="text" placeholder="Address" required /><br />
                                <input type="number" placeholder="Delivery Charge" defaultValue={price} /><br />
                                <input onBlur={(e) => setNumber(e.target.value)} type="number" placeholder='Enter Your Number' />
                                <br />
                                <button className="btn-now" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='services-container p-2 pb-4 border border-2 border-primary'>
                            <div>
                                <img src={img} className='w-100 service-img' alt="" />
                                <h6>${price}</h6>
                            </div>
                            <p className='service-location'><i class="fas fa-map-marker-alt mx-2"></i>{location}</p>
                            <h4 className='py-2'>{title}</h4>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;