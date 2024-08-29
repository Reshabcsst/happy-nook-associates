import React, { lazy, Suspense, useEffect } from 'react';
import bg from '../Assets/WhatweDobanner.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
const Contact = lazy(() => import('../Common/Contact'));
const CommonBanner = lazy(() => import('../Common/CommonBanner'));
const Services = lazy(() => import('../Component/OurServices/Services'));
const Sectors = lazy(() => import('../Component/Sectors'));
const LatestProjects = lazy(() => import('../Component/LatestProjects'));
const Testimonials = lazy(() => import('../Component/Testimonials'));
const OtherServices = lazy(() => import('../Component/OtherServices/OtherServices'));

const WhatWeDo = React.memo(() => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true, offset: 80 });
        document.title = "What We Do - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
    }, [])
    return (
        <div>
            <Suspense fallback={<div style={{ margin: "auto", display: "flex", alignItems: "center", width: "fit-content", height: "100vh" }}>Loading...</div>}>
                <CommonBanner heading='What We Do' bg={bg} />
                <Services />
                <OtherServices />
                <Sectors />
                <LatestProjects />
                <Testimonials />
                <Contact />
            </Suspense>
        </div>
    );
});

export default WhatWeDo;
