import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const {hash} = useLocation();

    return (
        <>
            <li className = {hash === '#home'? 'current' : null}><Link to="#home">Home</Link></li>
            <li className = {hash === '#about'? 'current' : null}><Link to="#about">About</Link></li>
            <li className = {hash === '#resume'? 'current' : null}><Link to="#resume">Resume</Link></li>
            <li className = {hash === '#portfolio'? 'current' : null}><Link to="#portfolio">Works</Link></li>
            <li className = {hash === '#testimonials'? 'current' : null}><Link to="#testimonials">Testimonials</Link></li>
            <li className = {hash === '#contact'? 'current' : null}><Link to="#contact">Contact</Link></li>
        </>
    ) 
}

export default Navbar; 