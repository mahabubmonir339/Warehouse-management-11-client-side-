import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyBooking = () => {
    const [booking, setBooking] = useState([]);
    const { user } = useAuth({});

    useEffect(() => {
        fetch(`https://obscure-thicket-61578.herokuapp.com/bookingTour/${user?.email}`)
            .then(res => res.json())
            .then(result => setBooking(result));
    }, [user.email]);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete booking?');
        if (confirm) {
            fetch(`https://obscure-thicket-61578.herokuapp.com/bookingTour/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = booking.filter(book => book._id !== id);
                    setBooking(remaining);
                })
        }

    }

    return (
        <div className="mt-4 mb-5">
            <h4>My Booking</h4>
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
                                                    <button className="btn btn-warning">Pending</button>
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

export default MyBooking;