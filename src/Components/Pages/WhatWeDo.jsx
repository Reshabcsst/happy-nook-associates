import React, { useEffect } from 'react';
import Contact from '../Common/Contact';
import CommonBanner from '../Common/CommonBanner';
import bg from '../Assets/WhatweDobanner.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';

const WhatWeDo = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, [])
    return (
        <div>
            <CommonBanner heading='What We Do' bg={bg} />
            <Contact />
        </div>
    );
};

export default WhatWeDo;
