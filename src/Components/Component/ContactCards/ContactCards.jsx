import { Call, LocationOnRounded, Mail } from '@mui/icons-material';
import React from 'react';

const ContactCards = () => {
    return (
        <div className='contact-cards container'>
            <div className="st">
                <LocationOnRounded />
                <h3>Location</h3>
                <p>11, Latoo Babu Lane. Kolkata-700006 (Opp. Bedon Street Post Office)</p>
            </div>
            <div className="st">
                <Call />
                <h3>Phone Numbers</h3>
                <a href="tel:+91 9433119893">
                    <span>+91 94331-19893</span>
                </a>
                <a href="tel:+91 9836075869">
                    <span>+91 98360-75869</span>
                </a>
            </div>
            <div className="st">
                <Mail />
                <h3>Email Address</h3>
                <a href="mailto:ashisnaskar379@gmail.com">
                    <span>ashisnaskar379@gmail.com</span>
                </a>
            </div>
        </div>
    );
};

export default ContactCards;
