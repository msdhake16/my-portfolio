import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <>
            <li className="current"><Link className="smoothscroll" to="#home">Home</Link></li>
            <li><Link className="smoothscroll" to="#about">About</Link></li>
            <li><Link className="smoothscroll" to="#resume">Resume</Link></li>
            <li><Link className="smoothscroll" to="#portfolio">Works</Link></li>
            <li><Link className="smoothscroll" to="#testimonials">Testimonials</Link></li>
            <li><Link className="smoothscroll" to="#contact">Contact</Link></li>
        </>
    )
}

export default Navbar; 