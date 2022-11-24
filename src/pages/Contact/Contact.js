import React from 'react';
import emailjs from 'emailjs-com';
import { submitButton, textContainer, textField } from '../../components/common/ClassNames';
import { ServiceID, TemplateID, UserID } from './secrets';

function Contact(props) {
    function sendEmail(e) {
        e.preventDefault();  

        emailjs.sendForm({ServiceID}, {TemplateID}, e.target, {UserID})
        .then((result) => {
            window.location.reload(); 
        }, (error) => {
            alert("Something went wrong!");
            window.location.reload();
        });
    };


    return (
        <form className={textContainer} onSubmit={sendEmail}>
            <input type="hidden" name="contact_number"/>
            <label>Name</label>
            <input type="text" name="from_name" className={textField}/>
            <label>Email</label>
            <input type="email" name="from_email" className={textField}/>
            <label>Subject</label>
            <input type="text" name="subject" className={textField}/>
            <label>Message</label>
            <textarea name="html_message" className={textField}/>
            <input type="submit" className={submitButton} value="Send" />
        </form>
    );
}

export default Contact;