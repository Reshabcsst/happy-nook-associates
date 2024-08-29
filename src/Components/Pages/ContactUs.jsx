import Aos from 'aos';
import React, { lazy, Suspense, useEffect } from 'react';
import bg from '../Assets/ContactBanner.jpg';
const Contact = lazy(() => import('../Component/ContactForm/Contact'));
const ContactCards = lazy(() => import('../Component/ContactCards/ContactCards'));
const CommonBanner = lazy(() => import('../Common/CommonBanner'));

const ContactUs = React.memo(() => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    document.title = "Contact Us - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
  }, [])
  return (
    <div>
      <Suspense fallback={<div style={{ margin: "auto", display: "flex", alignItems: "center", width: "fit-content", height: "100vh" }}>Loading...</div>}>
        <CommonBanner heading='Contact Us' bg={bg} />
        <Contact />
        <ContactCards />
      </Suspense>
    </div>
  );
});

export default ContactUs;
