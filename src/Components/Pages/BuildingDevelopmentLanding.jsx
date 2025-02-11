import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaAnglesRight } from "react-icons/fa6";
import Contact from '../Common/Contact';
import img from '../Assets/BAbout.jpg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Bprojects from '../DemoData/Bproject';
import Bservices from '../DemoData/Bservices';
import Bstats from '../DemoData/Bstats';

const BuildingDevelopmentLanding = () => {
    const navigate = useNavigate();

    const testimonials = [
        {
            text: "Outstanding service and remarkable attention to detail.",
            author: "Raghu Sen",
            position: "CEO, DL Enterprises"
        },
        {
            text: "Their innovative approach transformed our vision into reality.",
            author: "Samir Dey",
            position: "Property Developer"
        }
    ];
    return (
        <div className="landing-page">

            {/* SEO Optimization */}
            <Helmet>
                <title>Building Excellence | Premier Development Services</title>
                <meta name="description" content="We transform your vision into reality with expert construction and development services. From planning to execution, we build your dreams." />
                <meta name="keywords" content="construction, real estate, urban planning, architecture, project management" />
                <meta name="author" content="Your Company Name" />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:title" content="Building Excellence | Premier Development Services" />
                <meta property="og:description" content="We bring expertise in real estate development, construction, and architectural planning." />
                <meta property="og:image" content={img} />
                <meta property="og:url" content="https://happynookassociates.com/building-development" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:title" content="Building Excellence | Premier Development Services" />
                <meta name="twitter:description" content="We bring expertise in real estate development, construction, and architectural planning." />
                <meta name="twitter:image" content={img} />
                <meta name="twitter:card" content="summary_large_image" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://happynookassociates.com/building-development" />
            </Helmet>

            {/* Hero Section */}
            <div className="hero">
                <div className="hero-content">
                    <h1>Building Excellence, Delivering Dreams</h1>
                    <p>
                        Transform your vision into reality with our expert development services.
                        From concept to completion, we're your trusted partner in construction.
                    </p>
                    <button className="button-contained" onClick={() => { navigate('/contact'); }}>
                        <span>Get Started</span>
                        <FaAnglesRight size={20} />
                    </button>
                </div>
            </div>


            {/* About Section */}
            <section className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>About Our Company</h2>
                            <p>With decades of experience in construction and development, we bring unparalleled expertise to every project. Our commitment to quality and innovation sets us apart in the industry.</p>
                            <div className="stats-grid">
                                {Bstats.map((stat, index) => (
                                    <div key={index} className="stat-card">
                                        <h3>{stat.number}</h3>
                                        <p>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="about-image">
                            <img src={img} alt="About Us" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services" id="services">
                <div className="container">
                    <h2>Our Services</h2>
                    <div className="service-grid">
                        {Bservices.map((service, index) => (
                            <div key={index} className="service-card">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects" id="projects">
                <div className="container">
                    <h2>Featured Projects</h2>
                    <div className="project-grid">
                        {Bprojects.map((project, index) => (
                            <div key={index} className="project-card">
                                <img src={project.image} alt={project.title} />
                                <div className="overlay">
                                    <h3 className='p-title'>{project.title}</h3>
                                    <p>
                                        <CiLocationOn size={16} /> {project.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="container">
                    <h2>What Our Clients Say</h2>
                    <div className="testimonial-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <p className="quote">{testimonial.text}</p>
                                <div className="author">
                                    <h4>{testimonial.author}</h4>
                                    <p>{testimonial.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default BuildingDevelopmentLanding;
