import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navBar">
             <h1 className="header">Learn English Today</h1>
             <nav>
             <NavLink className="title" to="/home">Home</NavLink>
             <NavLink className="title" to="/about">About Us</NavLink>
             <NavLink className="title" to="/services">Services</NavLink>
             <NavLink className="title" to="/sign Up">Sign up</NavLink>
             </nav>
        </div>
    );
};

export default Header;