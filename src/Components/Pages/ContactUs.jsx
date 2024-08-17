import Aos from 'aos';
import React, { useEffect } from 'react';
import bg from '../Assets/ContactBanner.jpg';
import CommonBanner from '../Common/CommonBanner';

const ContactUs = React.memo(() => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    document.title = "Contact Us - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
  }, [])
  return (
    <div>
      <CommonBanner heading='Contact Us' bg={bg} />
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d189.7611813562928!2d88.36517398530138!3d22.590126348507788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1723866836185!5m2!1sen!2sin" width="100%" height="auto" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
});

export default ContactUs;
