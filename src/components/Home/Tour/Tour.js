import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Tour = (props) => {
    const { _id, img, title, description } = props.tour;

    return (
        <div className="mt-3 mb-5">
            <Col className="m-3 gx-4 h-100">
                <div className="card border-0 shadow h-100" >
                    <img src={img} className="card-img-top" height="130px" alt="" />
                    <div className="card-body h-100">
                        <h5 className="card-title text-warning">{title}</h5>
                        <p className="card-text text-start text-secondary">{description}</p>
                    </div>
                    <div className="card-footer border-0 bg-white">
                        <NavLink
                            to={`/tourbooking/${_id}`} type="button"
                            className="d-grid btn btn-success text-decoration-none text-white fs-6 fw-bold m-1"
                        >Book Now</NavLink>
                    </div>
                </div>
            </Col>
        </div>
    );
};

export default Tour;