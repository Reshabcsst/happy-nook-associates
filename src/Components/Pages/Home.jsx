import React, { lazy, Suspense, useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Helmet } from 'react-helmet';

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
  }, [])
  return (
    <div>
      <Helmet>
        <title>Top Architecture Firm in Kolkata | Fast Sanction Planning & Building Development | Engineering Consultant</title>
        <meta name="description" content="Looking for the best architecture firm in Kolkata? We specialize in fast KMC sanction planning, high-quality building development, and efficient approvals. Get your project done quickly and professionally!" />
        <meta name="keywords" content="building developer in Kolkata, best building developer in Kolkata, construction company in Kolkata, fast KMC sanction in Kolkata, KMC building plan sanction Kolkata, sanction planning consultant Kolkata, building plan approval in Kolkata, KMC sanction process Kolkata, architecture firms in Kolkata, Engineering Consultant, Building Development, Structural Engineering, Construction Services, Urban Planning, LBS in Kolkata, Kolkata municipal corporation building sanction, quick building approval Kolkata,  affordable building developer Kolkata, residential building developer in Kolkata, commercial building approval in Kolkata, residential building developer in Kolkata, commercial building approval in Kolkata,  fast construction permit Kolkata, how to get building sanction fast in Kolkata, KMC online building sanction process, building developer near me Kolkata, sanction approval expert Kolkata, best KMC sanction planner Kolkata, fast-track building plan approval Kolkata,  real estate project developer Kolkata" />
        <meta name="author" content="Happy Nook Associates" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Happy Nook Associates | Engineering & Building Development Experts" />
        <meta property="og:description" content="We provide top-notch engineering consulting and building development services, ensuring quality and sustainability." />
        <meta property="og:image" content="https://happynookassociates.com/static/media/Logo-dark.f1d540001eaccbe51993.png" />
        <meta property="og:url" content="https://happynookassociates.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Happy Nook Associates | Engineering & Building Development" />
        <meta name="twitter:description" content="Delivering exceptional engineering consulting and building development solutions." />
        <meta name="twitter:image" content="https://happynookassociates.com/static/media/Logo-dark.f1d540001eaccbe51993.png" />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />



        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Happy Nook Associates",
            "url": "https://happynookassociates.com",
            "logo": "https://happynookassociates.com/static/media/Logo-dark.f1d540001eaccbe51993.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "11, Latoo Babu Lane. Kolkata-700006 (Opp. Beadon Street Post Office)",
              "addressLocality": "Kolkata",
              "addressRegion": "WB",
              "postalCode": "700006",
              "addressCountry": "IN"
            },
            "description": "Happy Nook Associates provides expert engineering consulting and building development services. Trusted by clients for 25+ years.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 9836075849",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": "Bengali, Hindi, English"
            },
            "sameAs": [
              "https://www.facebook.com/share/HBqbZKLFhBunMQUH",
              "https://www.linkedin.com/in/happy-nook-associates-85349254",
              "https://x.com/AshisKumar379?t=ORrbcNchLpV2ycji17WNtA&s=08"
            ]
          })}
        </script>
      </Helmet>
      <Suspense fallback={<div style={{ margin: "auto", display: "flex", alignItems: "center", width: "fit-content", height: "100vh" }}>Loading...</div>}>
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
