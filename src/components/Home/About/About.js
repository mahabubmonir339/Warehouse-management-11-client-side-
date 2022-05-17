import React from 'react';
import { NavLink } from 'react-router-dom';
import about from '../../../images/about.jpg';

const About = () => {
    return (
        <div className="w-75 mx-auto mt-5 mb-5">
            <h4>About <span className="text-warning">Tanim</span><span className="text-success">Tourplan</span></h4><hr className="w-25 bg-success mx-auto" />
            <div className="card mb-4 border-0 mt-3">
                <div className="row g-0">
                    <div className="col-md-6 col-sm-12 ">
                        <img src={about} className="img-fluid rounded mt-2" alt="img" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="card-body text-start">
                            <h5 className="card-title">Discover <span className="text-warning">Tanim</span><span className="text-success">Tourplan</span></h5>
                            <p className="card-text">We're one of the largest travel companies serving both commercial and residential clients. Our dedicated staff has the expertise to handle a project of any complexity.</p>

                            <NavLink className="text-decoration-none text-secondary fs-6 ms-4 fw-bold" to="/tours">
                                <button className="btn btn-success rounded" to="/tours">Tour Plan</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;