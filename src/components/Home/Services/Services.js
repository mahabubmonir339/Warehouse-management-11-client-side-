import React from 'react';

const Services = () => {
    return (
        <div className="mt-4 mb-4">
            <h4 className="text-success fw-bold">Our Services</h4><hr className="w-25 mx-auto bg-success" />
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-4 w-75 mx-auto">
                <div className="col card border-0 ">
                    <div className="card-body text-start">
                        <h5 className="card-title text-warning"><i className="fas fa-plane-departure me-2"></i>Booking Tickets</h5>
                        <p className="card-text">Booking a ticket before three dayes of your journey.</p>
                    </div>
                </div>
                <div className="col card border-0">
                    <div className="card-body text-start">
                        <h5 className="card-title text-warning"><i className="fas fa-globe-asia me-2"></i>Tours Planning</h5>
                        <p className="card-text">Whatever your dream destination is, we'll plan your next vacation easily.</p>
                    </div>
                </div>
                <div className="col card border-0">
                    <div className="card-body text-start">
                        <h5 className="card-title text-warning"><i className="fas fa-medkit me-2"></i>Medical Support</h5>
                        <p className="card-text">We can supply you with necessary medical in the Travel Perioud.</p>
                    </div>
                </div>
                <div className="col card border-0">
                    <div className="card-body text-start">
                        <h5 className="card-title text-warning"><i className="fas fa-list-alt me-2"></i>Documents</h5>
                        <p className="card-text">We'll help you with any visas or documents along the way.</p>
                    </div>
                </div>
                <div className="col card border-0">
                    <div className="card-body text-start">
                        <h5 className="card-title text-warning"><i className="fas fa-hand-holding-usd me-2"></i>Best Price Guarantee</h5>
                        <p className="card-text">We always try to make our trips reasonable price.</p>
                    </div>
                </div>
                <div className="col card border-0">
                    <div className="card-body text-start">
                        <h5 className="card-title text-warning"><i className="fas fa-headphones me-2"></i>24/7 Support</h5>
                        <p className="card-text">We're always ready in your services via phone, email.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;