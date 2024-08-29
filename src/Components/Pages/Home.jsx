import React, { lazy, Suspense, useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Banner = lazy(() => import('../Common/Banner'));
const About = lazy(() => import('../Component/About'));
const Services = lazy(() => import('../Component/Services'));
const Sectors = lazy(() => import('../Component/Sectors'));
const LatestProjects = lazy(() => import('../Component/LatestProjects'));
const Testimonials = lazy(() => import('../Component/Testimonials'));
const WhyChoseUs = lazy(() => import('../Component/WhyChoseUs'));
const Contact = lazy(() => import('../Common/Contact'));
const CEO = lazy(() => import('../Component/CEO'));


const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    document.title = "Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
  }, [])
  return (
    <div>
      <Suspense fallback={<div style={{margin:"auto",display:"flex",alignItems:"center",width:"fit-content",height:"100vh"}}>Loading...</div>}>
        <Banner />
        <About />
        <Services />
        <Sectors />
        <LatestProjects />
        <Testimonials />
        <WhyChoseUs />
        <CEO />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Home;
