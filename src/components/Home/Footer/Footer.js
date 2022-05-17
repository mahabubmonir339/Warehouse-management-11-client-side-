import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className="mb-0 bg-light w-100">
            <div className="bg-light text-dark ms-4 me-4">
                <Row className="pt-3 text-success" lg={2} xs={1}>
                    <Col className="text-success mb-2">
                        <h5 className="fw-bold"><img alt="logo" src={logo} width="50" /><span className="text-warning ms-1">Tanim</span><span className="text-success">Tourplan</span></h5>
                        <p>House 1/2, Alif Housing , Road-6</p>
                        <p>Adabor,Dhaka-1207</p>
                        <p>Bangladesh</p>
                    </Col>
                    <Col className="text-success mb-2">
                        <h5 className="fw-bold text-warning">CONTACT</h5>
                        <p className="text-success"><i className="fas fa-phone-alt"></i> 01947476062</p>
                        <p className="text-success"><i className="far fa-envelope"></i> tanim.cse952@gmail.com</p>
                        <p>Mail us 24/7</p>
                    </Col>
                </Row>
            </div>
            <hr className="bg-success w-75 mx-auto" />
            <Container>
                <Row className="mt-1">
                    <Col className="pb-1"><small className="text-success">Copyright <i className="far fa-copyright text-success"></i> 2021 by <span className="text-warning">Tanim</span>Tourplan</small></Col>
                </Row>
            </Container>
        </div>

    );
};

export default Footer;