import React, { useEffect } from 'react';
import './ContactPage.css'; // Ensure this CSS file exists

const ContactPage = () => {
    // Effect hook to dynamically load the Calendly script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup script when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="contact-page">
            <h4 className="text-uppercase text-center">Contact Me</h4>

            {/* Calendly inline widget */}
            <div className="calendly-inline-widget"
                 data-url="https://calendly.com/efcanchari/30-minute?primary_color=ffa500"
                 style={{ minWidth: '320px', height: '700px' }}>
            </div>
        </div>
    );
}

export default ContactPage;
