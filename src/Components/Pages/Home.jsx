import React from 'react';
import Banner from '../Common/Banner';
import About from '../Component/About';
import Services from '../Component/Services';
import Sectors from '../Component/Sectors';
import LatestProjects from '../Component/LatestProjects';
import Testimonials from '../Component/Testimonials';
import WhyChoseUs from '../Component/WhyChoseUs';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Sectors />
      <LatestProjects />
      <Testimonials />
      <WhyChoseUs />
    </div>
  )
}

export default Home
