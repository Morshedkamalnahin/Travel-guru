import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useFirebase from '../../Hooks/UseFirebase';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './MyOrder.css'

const MyOrders = () => {
    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    // data load 
    useEffect(() => {
        fetch(`https://safe-tor-97464.herokuapp.com/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [orders, user.email])
    // cancel btn 
    const cancelOrder = (id) => {
        swal({
            title: "Are you sure?",
            text: "Cancel for this order registration.",
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
            <div className="container myOrder">
                <h2 className="text-center my-4">My <span style={{ color: "#313c90" }}>Orders</span></h2>
                {/* tabel  */}
                <Table striped bordered hover size="sm" responsive="sm" className='table-container'>
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>P.Number</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.charge}</td>
                                    {/* status  */}
                                    {
                                        order.status === 'Pending' ? <td className="text-danger fw-bold">{order.status}</td> : <td className="text-success fw-bold">{order.status}</td>
                                    }
                                    {/* cancel btn  */}
                                    <td><button onClick={() => cancelOrder(order._id)} className="btn btn-sm btn-danger">Cancel</button></td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </Table>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;