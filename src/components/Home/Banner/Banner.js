import React from 'react';
import { Carousel } from 'react-bootstrap';
import bali from '../../../images/bali.jpg';
import saintmartin from '../../../images/saintMartin.jpg';
import dubai from '../../../images/dubai.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="400"
                        src={dubai}
                        alt="first slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="400"
                        src={saintmartin}
                        alt="second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="400"
                        src={bali}
                        alt="third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;