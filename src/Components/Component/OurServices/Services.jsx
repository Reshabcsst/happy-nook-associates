import React, { useState } from 'react';
import servicesData from '../../DemoData/servicesData';

const Services = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='our-services container'>
      <h2 data-aos="fade-in">Our Services</h2>
      <h3 data-aos="fade-right">Structural Engineering for the Architecture<span>,</span> Engineering <span>&</span> Construction Industry<span>.</span></h3>

      {servicesData.map((service, index) => (
        <div key={index} className="st">
          <div className="lft">
            <img src={service.img} alt={service.title} />
          </div>
          <div className={`rht ${activeIndex === index ? 'active' : ''}`}>
            <h4 onClick={() => toggleAccordion(index)}>{service.title}</h4>
            {service.details.map((detail, i) => (
              <div key={i}>
                {detail.subtitle && <h5>{detail.subtitle}</h5>}
                <p>{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default Services;
