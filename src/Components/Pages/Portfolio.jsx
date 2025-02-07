import React, { lazy, Suspense, useEffect } from 'react';
import bg from '../Assets/PortfolioBanner.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Helmet } from 'react-helmet';
const PortfolioProjects = lazy(() => import('../Component/Portfolio/PortfolioProjects'));
const Contact = lazy(() => import('../Common/Contact'));
const CommonBanner = lazy(() => import('../Common/CommonBanner'));

const Portfolio = React.memo(() => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, [])
  return (
    <div>
      {/* Helmet for SEO and Metadata */}
      <Helmet>
        <title>Portfolio - Happy Nook Associates | Building Development | Engineering Consultant | Engineers</title>
        <meta name="description" content="Explore our portfolio of building development projects. Happy Nook Associates specializes in engineering consultation and construction solutions." />
        <meta name="keywords" content="building development, engineering consultant, construction, Happy Nook Associates" />
        <meta name="author" content="Happy Nook Associates" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:title" content="Portfolio - Happy Nook Associates" />
        <meta property="og:description" content="Discover our completed and ongoing projects at Happy Nook Associates." />
        <meta property="og:image" content={bg} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio - Happy Nook Associates" />
        <meta name="twitter:description" content="Take a look at our engineering and construction projects." />
        <meta name="twitter:image" content={bg} />
      </Helmet>
      <Suspense fallback={<div style={{ margin: "auto", display: "flex", alignItems: "center", width: "fit-content", height: "100vh" }}>Loading...</div>}>
        <CommonBanner heading='Portfolio' bg={bg} />
        <PortfolioProjects />
        <Contact />
      </Suspense>
    </div>
  );
});

export default Portfolio;
