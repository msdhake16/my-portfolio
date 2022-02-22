import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

const Topbar = () => {

    const {hash} = useLocation();

    return (
        <div id='topbar'>
            {hash === "#home" && <ScrollToTop/>}
            <nav id="nav-wrap">
               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
               <ul id="nav" className="nav">
                  <Navbar />
               </ul>
            </nav>
        </div>
    )
}

export default Topbar;