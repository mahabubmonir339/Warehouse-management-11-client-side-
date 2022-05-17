import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <Navbar bg="light" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand className="fw-bold">
                        <img
                            alt="logo"
                            src={logo}
                            width="50"
                            className="d-inline-block align-center"
                        />
                        <span className="ms-1 text-warning">Tanim</span><span className="text-success">Tourplan</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none text-secondary fs-6 ms-4 fw-bold" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none text-secondary fs-6 ms-4 fw-bold" to="/tours">Tourplan</NavLink>
                            <NavLink className="text-decoration-none text-secondary fs-6 ms-4 fw-bold" to="/deals">Deals</NavLink>
                            <NavLink className="text-decoration-none text-secondary fs-6 ms-3 fw-bold" to="/rewards">Rewards</NavLink>
                            {
                                user.email && <span className="text-secondary fw-bold ms-4 me-1">{user.displayName}</span>
                            }
                            {
                                user.email ?
                                    <Dropdown>
                                        <Dropdown.Toggle variant="warning" id="dropdown-basic" className="text-white fw-bold ms-3 text-center">
                                            <i className="fas fa-user me-2 text-white"></i>Profile
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="bg-light">
                                            <Dropdown.Item><NavLink className="text-decoration-none text-success" to="/myBooking"><i className="fas fa-clipboard-list me-2"></i>My Booking</NavLink></Dropdown.Item>
                                            <Dropdown.Item><NavLink className="text-decoration-none text-success" to="/manageBooking"><i className="fas fa-tasks me-2"></i>Manage Booking</NavLink></Dropdown.Item>
                                            <Dropdown.Item><NavLink className="text-decoration-none text-success" to="/addTour"><i className="fas fa-folder-plus me-2"></i>Add a new Plan</NavLink></Dropdown.Item>
                                            <Dropdown.Item onClick={logOut} className="text-success"><i className="fas fa-sign-out-alt me-2 text-success"></i>Sign Out</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    :
                                    <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-warning btn-sm" to="/signin"><i className="fas fa-sign-in-alt me-2 text-white"></i>Sign In</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;