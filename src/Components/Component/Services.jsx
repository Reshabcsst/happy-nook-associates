import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Styles.scss';
import Aos from 'aos';

const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    const ServiceData = [
        {
            id: 1,
            name: 'Planning',
            details: 'Comprehensive planning services aiming to provide cost-effective and technically feasible solutions tailored to each unique project.'
        },
        {
            id: 2,
            name: 'Design',
            details: 'Our design services utilize the latest tools and principles to ensure safety, efficiency, and adaptability.'
        },
        {
            id: 3,
            name: 'Construction Admin',
            details: 'Administration services that ensure quality, compliance, and effective communication throughout the construction process.'
        },
        {
            id: 4,
            name: 'Inspection',
            details: 'We help identify existing conditions, possible minor or hidden deficiencies, and present the information in a comprehensive report.'
        },
        {
            id: 5,
            name: 'Expert Witness',
            details: 'Senior staff is able to provide expert witness testimony for litigators and the property and casualty insurance industry.'
        }
    ];

    return (
        <div className='services container'>
            <h3>Our Services</h3>
            <h4 data-aos="fade-right">Architecture<span>.</span> Engineering<span>.</span> Construction<span>.</span></h4><span></span>
            <div className="fc">
                {ServiceData.slice(0, 2).map((data, index) => (
                    <div data-aos="fade-up" data-aos-duration={`${500 + index * 500}`} key={index} className={`service-card`}>
                        <h3>{data.name}</h3>
                        <p>{data.details}</p>
                        <button className='service-btn'><FaArrowRight /> Learn More</button>
                    </div>
                ))}
            </div>

            <div className="sc">
                {ServiceData.slice(2, 5).map((data, index) => (
                    <div data-aos="fade-up" data-aos-duration={`${500 + index * 500}`} key={index} className={`service-card1`}>
                        <h3>{data.name}</h3>
                        <p>{data.details}</p>
                        <button className='service-btn'><FaArrowRight /> Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
