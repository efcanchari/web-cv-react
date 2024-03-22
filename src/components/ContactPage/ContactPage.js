import React, { Component } from 'react';
import './ContactPage.css'; // Make sure to create this CSS file
import emailIcon from './email-icon.png'; // Path to your email icon
import pdfIcon from './pdf-icon.png'; // Path to your PDF icon
import githubIcon from './github-icon.png'; // Path to your GitHub icon
import linkedinIcon from './linkedin-icon.png'; // Path to your LinkedIn icon

class ContactPage extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // You'll need to implement what happens when the form is submitted
        console.log("Form submitted!");
    }

    render() {
        return (

            <div className="contact-page">

                <h4 className="text-uppercase text-center">Contact Me</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="email" placeholder="Email" name="email"/>
                    <input type="text" placeholder="Reason" name="reason"/>
                    <textarea placeholder="Your Message" name="message"></textarea>
                    <button type="submit">Send</button>
                </form>

            </div>
        );
    }
}

export default ContactPage;
