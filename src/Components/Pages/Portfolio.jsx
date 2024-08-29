import React, { lazy, Suspense, useEffect } from 'react';
import bg from '../Assets/PortfolioBanner.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
const PortfolioProjects = lazy(() => import('../Component/Portfolio/PortfolioProjects'));
const Contact = lazy(() => import('../Common/Contact'));
const CommonBanner = lazy(() => import('../Common/CommonBanner'));

const Portfolio = React.memo(() => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    document.title = "Portfolio - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
  }, [])
  return (
    <div>
      <Suspense fallback={<div style={{ margin: "auto", display: "flex", alignItems: "center", width: "fit-content", height: "100vh" }}>Loading...</div>}>
        <CommonBanner heading='Portfolio' bg={bg} />
        <PortfolioProjects />
        <Contact />
      </Suspense>
    </div>
  );
});

export default Portfolio;
