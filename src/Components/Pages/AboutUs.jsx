import React, { useEffect } from 'react';
import Contact from '../Common/Contact';
import CommonBanner from '../Common/CommonBanner';
import bg from '../Assets/AboutBanner.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';

const AboutUs = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, [])
    return (
        <div>
            <CommonBanner heading='About Us' bg={bg} />
            <Contact />
        </div>
    );
};

export default AboutUs;
