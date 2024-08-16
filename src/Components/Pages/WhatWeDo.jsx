import React, { useEffect } from 'react';
import Contact from '../Common/Contact';
import CommonBanner from '../Common/CommonBanner';
import bg from '../Assets/WhatweDobanner.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Services from '../Component/OurServices/Services';

const WhatWeDo = React.memo(() => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, [])
    return (
        <div>
            <CommonBanner heading='What We Do' bg={bg} />
            <Services />
            <Contact />
        </div>
    );
});

export default WhatWeDo;
