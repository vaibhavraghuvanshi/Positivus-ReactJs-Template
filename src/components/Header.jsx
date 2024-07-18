import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" className='img-fluid' />
      </div>
      <nav className='navbar'>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="client" smooth={true} duration={500}>Our Client</Link></li>
          <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
          <li><Link to="caseStudies" smooth={true} duration={500}>Use Cases</Link></li>
          <li><Link to="team" smooth={true} duration={500}>Team</Link></li>
          <li><Link to="request-quote" smooth={true} duration={500} className='buttonQuote'>Request a quote</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;