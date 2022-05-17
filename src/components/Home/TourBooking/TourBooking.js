import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useTours from '../../../hooks/useTours';
import useAuth from '../../../hooks/useAuth';

const TourBooking = () => {
    const { tourId } = useParams();
    const [tours] = useTours();
    const [details, setDetails] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    const redirect_uri = '/myBooking';
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        const matchTour = tours.find(singleTour => singleTour._id === tourId);
        setDetails(matchTour);
    }, [tourId, tours]);

    const onSubmit = (data) => {
        data.status = "Pending";
        fetch('https://obscure-thicket-61578.herokuapp.com/bookingTour', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert("Booked Successfully!");
                reset();
                history.push(redirect_uri);
            });
    };



    return (
        <div className="row w-75 mt-5 mb-5 mx-auto g-5">
            <div className="col-lg-6 col-sm-12 mt-4 mb-5">
                <div className="container shadow card border-0 p-2">
                    <img src={details?.img} className="card-img-top w-100" alt="" />
                    <div className="card-body h-100">
                        <h5 className="card-title text-success">{details?.title}</h5>
                        <p className="card-text text-start text-secondary">{details?.description}</p>
                        <div className="d-flex justify-content-between">
                            <p className="card-text text-success fw-bold">${details?.cost}/ Per Person</p>
                            <p className="card-text text-success fw-bold"><i className="fas fa-calendar-day"></i> {details?.duration} Days</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 container mt-4 mb-5 shadow p-3 mx-auto">
                <h1 className="mt-3 text-center text-success">Booking Form</h1>
                <div className="w-50 mx-auto mt-3 mb-5">
                    <div className="border-0 d-flex justify-content-center align-items-center">
                        <div className="mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {
                                    details?.title && <input
                                        {...register("title")}
                                        defaultValue={details?.title}
                                        placeholder="Title"
                                        className="p-3 m-3 w-100 border border-success rounded"
                                    />
                                }
                                <br />
                                <input
                                    {...register("name")}
                                    defaultValue={user.displayName}
                                    placeholder="Name"
                                    className="p-3 m-3 w-100 border border-success rounded"
                                />
                                <br />
                                <input
                                    {...register("email")}
                                    defaultValue={user.email}
                                    placeholder="Email"
                                    className="p-3 m-3 w-100 border border-success rounded"
                                />
                                <br />
                                <input
                                    {...register("date", { required: true })}
                                    type="date"
                                    className="p-3 m-3 w-100 border border-success rounded"
                                />
                                <br />
                                <select {...register("gender")} className="p-3 m-3 w-100 border border-success rounded">
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                                <br />
                                <input
                                    {...register("city", { required: true })}
                                    placeholder="City"
                                    className="p-3 m-3 w-100 border border-success rounded"
                                />
                                <br />
                                {errors.exampleRequired && <span>This field is required</span>}
                                <input type="submit" value="Confirm Booking" className="btn btn-success w-100 border border-success rounded m-3" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourBooking;