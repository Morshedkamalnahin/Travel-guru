import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    // data load 
    useEffect(() => {
        fetch('https://safe-tor-97464.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders])
    // approve btn 
    const handleApproved = (id) => {
        fetch(`https://safe-tor-97464.herokuapp.com/allOrders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Approved!", "Approved Successfully!", "success");
                }
            })
    }
    // delete btn 
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://safe-tor-97464.herokuapp.com/allOrders/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Deleted Successfully!", "success");
                            }
                        })
                } else {
                    swal("Delete Canceled!");
                }
            });
    }

    return (
        <div>
            <Header></Header>
            <div className="container">
                <h2 className="text-center my-4">Manage All <span style={{ color: "#313c90" }}>Orders</span></h2>
                {/* tabel  */}
                <Table striped bordered hover size="sm" responsive="sm">
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>P.Number</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map((order, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.phone}</td>
                                    {/* status  */}
                                    {
                                        order.status === 'Pending' ? <td className="text-danger fw-bold">{order.status}</td> : <td className="text-success fw-bold">{order.status}</td>
                                    }
                                    {/* approved and delete btn  */}
                                    <td><button onClick={() => handleApproved(order._id)} className="btn btn-sm btn-success">Approved</button></td>
                                    <td><button onClick={() => handleDelete(order._id)} title="Delete" className="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button></td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </Table>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default ManageOrders;