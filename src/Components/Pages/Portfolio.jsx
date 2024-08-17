import React, { useEffect } from 'react';
import Contact from '../Common/Contact';
import CommonBanner from '../Common/CommonBanner';
import bg from '../Assets/PortfolioBanner.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Portfolio = React.memo(() => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    document.title = "Portfolio - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
  }, [])
  return (
    <div>
      <CommonBanner heading='Portfolio' bg={bg} />
      <Contact />
    </div>
  );
});

export default Portfolio;
