import React from 'react';

const Services = () => {
    const ServicesData = [
        {
            name: 'Planning',
            details: 'Comprehensive planning services aiming to provide cost-effective and technically feasible solutions tailored to each unique project.'
        },
        {
            name: 'Design',
            details: 'Our design services utilize the latest tools and principles to ensure safety, efficiency, and adaptability.'
        },
        {
            name: 'Construction Admin',
            details: 'Administration services that ensure quality, compliance, and effective communication throughout the construction process.'
        },
        {
            name: 'Inspection',
            details: 'We help identify existing conditions, possible minor or hidden deficiencies, and present the information in a comprehensive report.'
        },
        {
            name: 'Expert Witness',
            details: 'Senior staff is able to provide expert witness testimony for litigators and the property and casualty insurance industry.'
        }
    ];
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
            </div>
        </div>
    );
};

export default Services;
