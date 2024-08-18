import Aos from 'aos';
import React, { useEffect } from 'react';
import bg from '../Assets/ContactBanner.jpg';
import CommonBanner from '../Common/CommonBanner';
import Contact from '../Component/ContactForm/Contact';
import ContactCards from '../Component/ContactCards/ContactCards';

const ContactUs = React.memo(() => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    document.title = "Contact Us - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
  }, [])
  return (
    <div>
      <CommonBanner heading='Contact Us' bg={bg} />
      <Contact />
      <ContactCards/>
    </div>
  );
});

export default ContactUs;
