import React from 'react';
import ContactForm from "./../ContactForm/ContactForm";
import './Contact.css';

const Contact = () => {
    return (
        <div className="my-5">
            <h1 className="fw-bold">Get in touch with us</h1>
            <hr className="horizontal-line" />
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;