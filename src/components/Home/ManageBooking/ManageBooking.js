import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageBooking = () => {
    const [booking, setBooking] = useState([]);
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://obscure-thicket-61578.herokuapp.com/bookingTour')
            .then(res => res.json())
            .then(result => setBooking(result));
    }, [booking]);


    const handleUpdate = id => {
        fetch(`https://obscure-thicket-61578.herokuapp.com/bookingTour/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Status Updated!');
                }
            })
    }


    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete booking?');
        if (confirm) {
            fetch(`https://blooming-ocean-16338.herokuapp.com/bookingTour/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Booking deleted!')
                        const remaining = bookings.filter(book => book._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }

    return (
        <div className="mt-4 mb-5 mx-auto">
            <h4>Manage All Booking</h4>
            <hr className="bg-success w-25 mx-auto" />
            <div className="shadow p-2 mt-5 mb-5 w-75 mx-auto">
                <div>
                    <Table responsive class="mb-3  striped bordered hover">
                        <thead className="">
                            <tr className="text-success">
                                <th scope="col">Name</th>
                                <th scope="col">Tour Title</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map(book =>
                                    <tr key={book._id}>
                                        <td>{book.name}</td>
                                        <td>{book.title}</td>
                                        <td>{book.email}</td>
                                        <td>
                                            {
                                                book?.status === "Pending" ?
                                                    <button onClick={() => handleUpdate(book._id)} className="btn btn-warning">Pending</button>
                                                    :
                                                    <button className="btn btn-success">Approved</button>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(book?._id)} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;