import React, { useEffect } from 'react';
import Banner from '../Common/Banner';
import About from '../Component/About';
import Services from '../Component/Services';
import Sectors from '../Component/Sectors';
import LatestProjects from '../Component/LatestProjects';
import Testimonials from '../Component/Testimonials';
import WhyChoseUs from '../Component/WhyChoseUs';
import Contact from '../Common/Contact';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, [])
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Sectors />
      <LatestProjects />
      <Testimonials />
      <WhyChoseUs />
      <Contact />
    </div>
  )
}

export default Home
