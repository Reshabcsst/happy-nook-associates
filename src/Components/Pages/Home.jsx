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
import CEO from '../Component/CEO';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    document.title = "Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
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
      <CEO />
      <Contact />
    </div>
  )
}

export default Home
