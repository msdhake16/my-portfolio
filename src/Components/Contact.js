// eslint-disable
import React from 'react';
import { useLocation } from "react-router-dom";
import ScrollToTop from './SubComponents/ScrollToTop';
import FormComponent from './SubComponents/FormComponent';

const Contact = ({data = {address : {}}}) => {
  
   const {hash} = useLocation();

   const {name, address : {street, city, state, zip }, phone, email, message} = data;

   return (
         <section id="contact">
            {hash === "#contact" && <ScrollToTop/>}
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>
               <div className="ten columns">
                  <p className="lead">{message}</p>
               </div>
            </div>

            <div className="row">
               <div className="eight columns">
                  <FormComponent name = {name}/>
                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>
               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span><br/>
                        <span>{email}</span>
                     </p>
                  </div>

                  <div className="widget widget_tweets">
                     <h4 className="widget-title">Latest Tweets</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                           Make it work, then make it beautiful, then if you really, really have to, make it fast. 90 percent of the time, if you make it beautiful, 
                           it will already be fast. So really, just make it beautiful!
                        {/* eslint-disable-next-line */}
                        <a href="">http://lifestyle/msdian</a>
                           </span>
                           <b><a href="">2 Days Ago</a></b>
                        </li>
                        <li>
                           <span>
                           Learn not to add too many features right away, and get the core idea built and tested.
                        <a href="">http://lifestyle/msdian</a>
                           </span>
                           <b><a href="">3 Days Ago</a></b>
                        </li>
                     </ul>
                  </div>
               </aside>
            </div>
         </section>
      );
}
export default Contact;
