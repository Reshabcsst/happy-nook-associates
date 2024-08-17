import React, { useEffect } from 'react';
import Contact from '../Common/Contact';
import CommonBanner from '../Common/CommonBanner';
import bg from '../Assets/WhatweDobanner.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Services from '../Component/OurServices/Services';
import Sectors from '../Component/Sectors';
import LatestProjects from '../Component/LatestProjects';
import Testimonials from '../Component/Testimonials';

const WhatWeDo = React.memo(() => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true, offset: 80 });
        document.title = "What We Do - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
    }, [])
    return (
        <div>
            <CommonBanner heading='What We Do' bg={bg} />
            <Services />
            <Sectors />
            <LatestProjects />
            <Testimonials />
            <Contact />
        </div>
    );
});

export default WhatWeDo;
