import React, { lazy, Suspense, useEffect } from 'react';
import bg from '../Assets/WhatweDobanner.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Helmet } from 'react-helmet';
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
    }, [])
    return (
        <div>
            {/* Helmet for SEO and Metadata */}
            <Helmet>
                <title>What We Do - Happy Nook Associates | Building Development | Engineering Consultant | Engineers</title>
                <meta name="description" content="Learn about the services and expertise of Happy Nook Associates. We specialize in building development, engineering consultancy, and construction management." />
                <meta name="keywords" content="building development, engineering consultancy, construction, Happy Nook Associates, civil engineering, infrastructure projects" />
                <meta name="author" content="Happy Nook Associates" />

                {/* Open Graph Meta Tags for Social Media */}
                <meta property="og:title" content="What We Do - Happy Nook Associates" />
                <meta property="og:description" content="Explore our range of services, from engineering consultancy to construction project management." />
                <meta property="og:image" content={bg} />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="What We Do - Happy Nook Associates" />
                <meta name="twitter:description" content="Discover our expertise in building development and engineering consultancy." />
                <meta name="twitter:image" content={bg} />
            </Helmet>
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
