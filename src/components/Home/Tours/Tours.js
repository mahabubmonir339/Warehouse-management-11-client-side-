import React from 'react';
import { Row, Spinner } from "react-bootstrap";
import Tour from '../Tour/Tour';
import useTours from '../../../hooks/useTours';

const Tours = () => {

    const [ tours] =useTours();

    return (
        <div className="mt-4 mb-3">
            <h4 className="text-success fw-bold">Our Tour Plans</h4>
            <hr className="bg-success w-25 mx-auto"/>
            {
                tours.length===0 ? <Spinner animation="border" variant="success"/>
                :
                <Row xs={1} lg={3} md={2} className="g-2 container w-75 mx-auto">
                {
                    tours.map(tour=><Tour key={tour._id} tour={tour}></Tour>)
                }
            </Row>
            }
        </div>
    );
};

export default Tours;