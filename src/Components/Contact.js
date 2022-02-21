// eslint-disable
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FORM_FIELDS = {
} 

const Contact = ({data = {address : {}}}) => {
   const [fields, setFields] = useState(FORM_FIELDS);

   const handleChange = (event) => {
     const {name, value} = event.target;
     setFields({
        ...fields,
        [name]: value
     })
   }

   const {name, address : {street, city, state, zip }, phone, email, message} = data;

   const onFormSubmit = (event) => {
      event.preventDefault();
      const {contactEmail, contactMessage, contactName, contactSubject} = fields;
      emailjs.send("service_2su7c1l","template_tu7qsbz",{
         subject: contactSubject,
         from_name: name,
         to_name: contactName,
         message: contactMessage,
         to_email: contactEmail
      },'user_STm7DRnlkOEd6aPsHMIuN');
   }


   
   return (
         <section id="contact">

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

                  {<form onSubmit={onFormSubmit} >
                     <fieldset>

                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" 
                            defaultValue="" size="35" id="contactName" name="contactName" onChange={handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleChange} />
                        </div>

                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={handleChange}></textarea>
                        </div>

                        <div>
                           <button className="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form> }

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
