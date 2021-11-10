import React from 'react';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Footer from '../Footer/Footer';

const AddNewServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        
        axios.post('https://safe-tor-97464.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Data set Successfully');
                    reset();
                }
            })
    };
    return (
        <div className=''>
            <Header></Header>
            <h1 className='text-center service-title mt-5 fs-1'>Add New Services</h1>
            {/* add services add form */}
            <form className='mx-auto d-flex flex-column from-container mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3 p-2' placeholder='Image Url' {...register("img")} />
                <input className='mb-3 p-2' placeholder='Enter Title' {...register("title")} />
                <input className='mb-3 p-2' placeholder='Enter location' {...register("location")} />
                <textarea className='mb-3 p-2' placeholder='Write Description' {...register("desc")} />
                <input className='mb-3 p-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 p-2 btn-now' type="submit" />
            </form>
            {/* footer section  */}
            <Footer></Footer>
        </div>
    );
};

export default AddNewServices;