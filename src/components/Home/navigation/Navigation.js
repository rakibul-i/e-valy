import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigation.css';


const Navigation = () => {
    
    return (
        <div className="navigation">
            <div className="w-75 mx-auto">
            <Navbar expand="lg">
            <Navbar.Brand as={Link} to="/" className="active" >Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link  id="nav__item1" as={Link} to="/shops" >All Shops</Nav.Link>
                <Nav.Link  className="nav__item" as={Link} to="/giftCard" >Gitt Card</Nav.Link>
                <Nav.Link  className="nav__item" as={Link} to="/campaigns">Campaigns</Nav.Link>
                <Nav.Link  className="nav__item" as={Link} to="/express">Express</Nav.Link>
                <Nav.Link  className="nav__item" as={Link} to="/cyclone">Cyclone</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
    );
};

export default Navigation;