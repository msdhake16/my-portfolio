import React from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './SubComponents/ScrollToTop';

const About =  ({data = {address : {}}}) => {
    
   const {name , image, bio, address : { street, city, state, zip }, phone , email, resumedownload} = data;
   const {hash} = useLocation();

   return (
      <section id="about">
         {hash === "#about" && <ScrollToTop/>}
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={`images/${image}`} alt="Manoj Dhake Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={`images/${resumedownload}`} className="button" 
                     target="_blank" rel="noreferrer noopener"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
}

export default About;
