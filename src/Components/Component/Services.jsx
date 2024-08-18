import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Styles.scss';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';
import updatedServicesData from '../DemoData/ServiceDataForHome';

const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    const navigate = useNavigate();

    return (
        <div className='services container'>
            <h3>Our Services</h3>
            <h4 data-aos="fade-right">Architecture<span>.</span> Engineering<span>.</span> Construction<span>.</span></h4><span></span>
            <div className="fc">
                {updatedServicesData.slice(0, 2).map((data, index) => (
                    <div data-aos="fade-up" data-aos-duration={`${500 + index * 500}`} key={index} className={`service-card`}>
                        <h3>{data.title}</h3>
                        <p>{data.smalldetails}</p>
                        <button onClick={() => { navigate('/what-we-do') }} className='service-btn'><FaArrowRight /> Learn More</button>
                    </div>
                ))}
            </div>

            <div className="sc">
                {updatedServicesData.slice(2, 5).map((data, index) => (
                    <div data-aos="fade-up" data-aos-duration={`${500 + index * 500}`} key={index} className={`service-card1`}>
                        <h3>{data.title.replace('Administration', 'Admin')}</h3>
                        <p>{data.smalldetails}</p>
                        <button onClick={() => { navigate('/what-we-do') }} className='service-btn'><FaArrowRight /> Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
