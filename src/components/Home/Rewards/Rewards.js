import React from 'react';
import { Carousel } from 'react-bootstrap';


const Rewards = () => {
    return (
        <div className="mb-5">
            <div className="container text-center mx-auto mt-5 mb-5 w-75">
                <h3 className="text-warning fw-bold">Tour Coins</h3>
                <h6 className="text-success fw-bold fst-italic">Travel smart by earning and redeeming Tour Coins! 10 Tour Coins = $100</h6>
                <h6 className="text-dark fst-italic"><span className="text-warning">Tanim</span><span className="text-success">Tourplan
                </span> will use the real-time exchange rate from a designated open source to convert Tour Coins to USD at the time of transaction. </h6>
            </div>
            <div className="container text-center mx-auto mt-5 mb-5 w-75">
                <h3 className="text-warning fw-bold">How to Use Tour Coins</h3>
                <h6 className="text-success fw-bold fst-italic">You can use Tour Coins in the app to save instantly on bookings.</h6>
                <h6 className="text-success fw-bold fst-italic">You can use Tour Coins in the app to save instantly on Flights.</h6>
                <h6 className="text-success fw-bold fst-italic">You can use Tour Coins in the app to save instantly on Hotels.</h6>
                <h6 className="text-success fw-bold fst-italic">You can use Tour Coins in the app to Exchange in USD.</h6>


            </div>
        </div>
    );
};

export default Rewards;