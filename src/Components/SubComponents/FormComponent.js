import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const FormComponent = (props) => {
  
    const {register,handleSubmit,formState: { errors },clearErrors,} = useForm();
    const {name} = props;
    
    const onSubmit = (data) => {
        sendEmail(data);
    }

    const sendEmail = (data) => {
        const {contactEmail, contactMessage, contactName, contactSubject} = data;
        emailjs.send("service_2su7c1l","template_tu7qsbz",{
            subject: contactSubject,
            from_name: name,
            to_name: contactName,
            message: contactMessage,
            to_email: contactEmail
         },'user_STm7DRnlkOEd6aPsHMIuN');
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="contactName">
          Name <span className="required">*</span>
        </label>
        {errors.contactName && <span>This field is required 3-10 letter</span>}
        <input
          type="text"
          defaultValue=""
          id="contactName"
          name="contactName"
          {...register("contactName", {
            required: true,
            minLength: 3,
            maxLength: 10,
          })}
          onClick={() => clearErrors()}
        />
      </div>
      <div>
        <label htmlFor="contactEmail">
          Email <span className="required">*</span>
        </label>
        {errors.contactEmail && <span>invalid email address</span>}
        <input
          type="text"
          defaultValue=""
          id="contactEmail"
          name="contactEmail"
          {...register("contactEmail", {
            required: true,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              }
          })}
          onClick={() => clearErrors()}
        />
        
      </div>

      <div>
        <label htmlFor="contactSubject">Subject</label>
        {errors.contactSubject && <span>Subject must be greater than 15 words</span>}
        <input
          type="text"
          defaultValue=""
          id="contactSubject"
          name="contactSubject"
          {...register("contactSubject", {
            required: true,
            minLength: 15,
          })}
          onClick={() => clearErrors()}
        />
        
      </div>

      <div>
        <label htmlFor="contactMessage">
          Message <span className="required">*</span>
        </label>
        {errors.contactMessage && <span>Message must be greater than 50 words</span>}
        <textarea
          cols="50"
          rows="15"
          id="contactMessage"
          name="contactMessage"
          {...register("contactMessage", {
            required: true,
            minLength: 50,
          })}
          onClick={() => clearErrors()}
        ></textarea>
      </div>

      <div>
        <button className="submit">Submit</button>
        <span id="image-loader">
          <img alt="" src="images/loader.gif" />
        </span>
      </div>
    </form>
  );
};

export default FormComponent;
