import React from 'react';
<<<<<<< HEAD
import { FaArrowRight } from 'react-icons/fa';
import './Styles.scss';

const Services = () => {
    const ServiceData = [
        {
            id: 1,
=======

const Services = () => {
    const ServicesData = [
        {
>>>>>>> 7eea7fed2356b029f837d87676cee676ba885310
            name: 'Planning',
            details: 'Comprehensive planning services aiming to provide cost-effective and technically feasible solutions tailored to each unique project.'
        },
        {
<<<<<<< HEAD
            id: 2,
=======
>>>>>>> 7eea7fed2356b029f837d87676cee676ba885310
            name: 'Design',
            details: 'Our design services utilize the latest tools and principles to ensure safety, efficiency, and adaptability.'
        },
        {
<<<<<<< HEAD
            id: 3,
=======
>>>>>>> 7eea7fed2356b029f837d87676cee676ba885310
            name: 'Construction Admin',
            details: 'Administration services that ensure quality, compliance, and effective communication throughout the construction process.'
        },
        {
<<<<<<< HEAD
            id: 4,
=======
>>>>>>> 7eea7fed2356b029f837d87676cee676ba885310
            name: 'Inspection',
            details: 'We help identify existing conditions, possible minor or hidden deficiencies, and present the information in a comprehensive report.'
        },
        {
<<<<<<< HEAD
            id: 5,
=======
>>>>>>> 7eea7fed2356b029f837d87676cee676ba885310
            name: 'Expert Witness',
            details: 'Senior staff is able to provide expert witness testimony for litigators and the property and casualty insurance industry.'
        }
    ];
<<<<<<< HEAD

    return (
        <div className='services container'>
            <h3>Our Services</h3>
            <h4>Architecture<span>.</span> Engineering<span>.</span> Construction<span>.</span></h4><span></span>
            <div className="fc">
                {ServiceData.slice(0, 2).map((data, index) => (
                    <div key={index} className={`service-card`}>
                        <h3>{data.name}</h3>
                        <p>{data.details}</p>
                        <button className='service-btn'><FaArrowRight /> Learn More</button>
                    </div>
                ))}
            </div>

            <div className="sc">
                {ServiceData.slice(2, 5).map((data, index) => (
                    <div key={index} className={`service-card1`}>
                        <h3>{data.name}</h3>
                        <p>{data.details}</p>
                        <button className='service-btn'><FaArrowRight /> Learn More</button>
                    </div>
                ))}
=======
    return (
        <div className='services container'>
            <h3></h3>
            <h2></h2>
            <div className="main">
                {ServicesData.map((data, index) => {
                    return (
                        <div key={index} className="service">
                            <h3>{data.name}</h3>
                            <p>{data.details}</p>
                            <button>Learn More</button>
                        </div>
                    )
                })}
>>>>>>> 7eea7fed2356b029f837d87676cee676ba885310
            </div>
        </div>
    );
};

export default Services;
