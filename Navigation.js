import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/videos">More</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/partners">Partners</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
