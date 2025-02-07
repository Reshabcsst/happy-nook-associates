import Aos from 'aos';
import React, { lazy, Suspense, useEffect } from 'react';
import bg from '../Assets/ContactBanner.jpg';
import { Helmet } from 'react-helmet';
const Contact = lazy(() => import('../Component/ContactForm/Contact'));
const ContactCards = lazy(() => import('../Component/ContactCards/ContactCards'));
const CommonBanner = lazy(() => import('../Common/CommonBanner'));

const ContactUs = React.memo(() => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, [])
  return (
    <div>
      {/* SEO Optimization with Helmet */}
      <Helmet>
        <title>Contact Us - Happy Nook Associates | Building Development | Engineering Consultant</title>
        <meta name="description" content="Get in touch with Happy Nook Associates for expert building development and engineering consulting services. Reach us via email, phone, or visit our office." />
        <meta name="keywords" content="Contact Happy Nook Associates, Engineering Consultant, Building Development, Construction Services, Urban Planning" />
        <meta name="author" content="Happy Nook Associates" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Contact Us - Happy Nook Associates" />
        <meta property="og:description" content="Reach out to us for expert building development and engineering consulting services. Call, email, or visit our office today!" />
        <meta property="og:image" content={bg} />
        <meta property="og:url" content="https://happynookassociates.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Happy Nook Associates" />
        <meta name="twitter:description" content="Need expert engineering consultation? Contact Happy Nook Associates today." />
        <meta name="twitter:image" content={bg} />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Suspense fallback={<div style={{ margin: "auto", display: "flex", alignItems: "center", width: "fit-content", height: "100vh" }}>Loading...</div>}>
        <CommonBanner heading='Contact Us' bg={bg} />
        <Contact />
        <ContactCards />
      </Suspense>
    </div>
  );
});

export default ContactUs;
