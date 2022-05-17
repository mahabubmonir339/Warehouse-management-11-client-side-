import React from 'react';
import saintmartin from '../../../images/saintMartin.jpg';
import dubai from '../../../images/dubai.jpg';
import { Card, Col, Row } from 'react-bootstrap';

const Deals = () => {
    return (
        <div className="mt-4 mb-5 w-75 mx-auto">
            <div className="mb-2 mt-2">
                <h3 className="text-success fw-bold">Today's Top Deals</h3>
                <hr className="w-25 bg-success mx-auto" />
                <Row xs={1} md={2} className="g-4 mt-3 mb-3">
                    <Col className="">
                        <Card className="border-0 shadow">
                            <Card.Img variant="top" src={saintmartin} />
                            <Card.Body>
                                <Card.Title className="text-success fw-bold">Saint Martin Island Tour is now open!</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 shadow">
                            <Card.Img variant="top" src={saintmartin} />
                            <Card.Body>
                                <Card.Title className="text-success fw-bold">Buy 1 tiket Get 1 Free!</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="mt-5 mb-4 text-start">
                <h5 lassName="fw-bold">Save on Travel with <span className="text-warning fw-bold">Tanim</span><span className="text-success fw-bold">Tourplan</span></h5>
                <p className="fst-italic"><span className="text-warning fw-bold">Tanim</span><span className="text-success fw-bold">Tourplan</span> is a rapidly-growing global online travel agency, <span className="text-warning fw-bold">Tour</span><span className="text-success fw-bold">Tourplan</span> is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, <span className="text-warning fw-bold">Tanim</span><span className="text-success fw-bold">Tourplan</span> is here to help you travel the world with cheap flights, discount hotels, and train tickets. Looking to find great travel deals or enjoy the biggest savings on your next trip? <span className="text-warning fw-bold">Tanim</span><span className="text-success fw-bold">Tourplan</span> has you covered. With our easy-to-use website and app, along with 24-hour customer service, booking your next trip couldn't be simpler. With <span className="text-warning fw-bold">Tanim</span><span className="text-success fw-bold">Tourplan</span>, quality travel services in over a dozen languages including English, Mandarin, Cantonese, Japanese, Korean, German, French, and Spanish are just a call—or click—away.</p>
            </div>
            <div className="mt-5 mb-4 text-start">
                <h5 lassName="fw-bold">Easily Customize Your Trip with the Best Hotel and Flight Deals</h5>
                <p className="fst-italic">It's easy to customize your travel experience with our robust flight and hotel search filter options and <span className="text-warning fw-bold">Tanim</span><span className="text-success fw-bold">Tourplan</span> travel tools like flight fare alerts, deal-finder calendar, and early bird deals. <span className="text-warning fw-bold">Tanim</span><span className="text-success fw-bold">Tourplan</span>'s secure payment system takes the stress out of travel by providing easy payment options, including credit and debit cards, and UnionPay.</p>
            </div>
        </div>
    );
};

export default Deals;