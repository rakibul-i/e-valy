import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigation.css';


const Navigation = () => {
    return (
        <div className="navigation">
            <div className="w-75 mx-auto">
            <nav className="navigation__nav">
                <ul className="navigation__ul">
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/shops">All Shops</Link></li>
                    <li><Link to="/giftCard">Gitt Card</Link></li>
                    <li><Link to="/campaigns">Campaigns</Link></li>
                    <li><Link to="/express">Express</Link></li>
                    <li><Link to="/cyclone">Cyclone</Link></li>
                </ul>
            </nav>
            </div>
        </div>
    );
};

export default Navigation;