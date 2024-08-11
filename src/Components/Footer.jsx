import React from 'react';
import './Style.scss';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import LogoLight from './Assets/Logo-light.png';
import { Call, LocationCity, Mail } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to='/'><img src={LogoLight} alt="logo" /></Link>
                        {/* <h3>HAPPY NOOK ASSOCIATES</h3> */}
                        <p>At Happy Nook Associates, we combine expertise with innovation to deliver high-quality engineering and construction services. Our team is dedicated to excellence in project management, design, and execution, ensuring that every project meets your highest standards.</p>
                    </div>
                    <div className="col">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/service'>What We Do</Link></li>
                            <li><Link to='/about-us'>About Us</Link></li>
                            <li><Link to='/contact-us'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Contact Us</h3>
                        <p><Call sx={{ fontSize: '20px' }} /> +91 94331-19893</p>
                        <p><Call sx={{ fontSize: '20px' }} /> +91 98360-75869</p>
                        <p><Mail sx={{ fontSize: '20px' }} /> ashisnaskar379@gmail.com</p>
                        <p className='address'><LocationCity sx={{ fontSize: '20px' }} />11, Latoo Babu Lane. Kolkata-700006 (Opp. Bedon Street Post Office)</p>
                    </div>
                    <div className="col">
                        <h3>Social Media</h3>
                        <div className="social-icons">
                            <a aria-label="facebook" href="https://www.facebook.com/ashis.naskar.12?mibextid=ZbWKwL"><FaFacebookF /></a>
                            <a aria-label="instagram" href="https://www.instagram.com/offical_happynook/?utm_source=qr&igsh=MWs3NmIwaGZiZWk2eQ%3D%3D"><FaInstagram /></a>
                            <a aria-label="Chat on WhatsApp" href="https://wa.me/9836075849"><FaWhatsapp /></a>
                            <a aria-label="twitter" href="#"><RiTwitterXLine /></a>
                            <a aria-label="linkedin" href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                <p className='right'>© 2024 Happy Nook Associates. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
