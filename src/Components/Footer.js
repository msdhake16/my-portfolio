import React from 'react';
import SocialComponent from './SubComponents/SocialComponent';


const Footer = ({data = { social : []}}) => {

  const {social} = data;

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              <SocialComponent social={social} />
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2022 Manoj Suresh Dhake</li>
              <li>Design by <a title="Styleshout" href="">mystyle.com</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
}

export default Footer;
