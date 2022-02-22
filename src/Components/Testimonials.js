import React from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './SubComponents/ScrollToTop';

const Testimonials =  ({data = { testimonials: [] }}) =>  {

   const { testimonials } = data;
   const { hash } = useLocation();
   let testimonialsDetails = testimonials.map(function(testimonials){
      return  <li key={testimonials.user}>
          <blockquote>
             <p>{testimonials.text}</p>
             <cite>{testimonials.user}</cite>
          </blockquote>
       </li>
    })

    return (
      <section id="testimonials">
         {hash === "#testimonials" && <ScrollToTop/>}
         <div className="text-container">
            <div className="row">

               <div className="two columns header-col">
                 <h1><span>Client Testimonials</span></h1>
               </div>

               <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonialsDetails}
                  </ul>
               </div>
            </div>
         </div>
      </section>
    );
}

export default Testimonials;
