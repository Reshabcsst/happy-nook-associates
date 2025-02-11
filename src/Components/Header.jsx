import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import LogoDark from './Assets/Logo-dark.png';
import LogoLight from './Assets/Logo-light.png';
import { RiCloseLine } from 'react-icons/ri';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 70);
    };

    // Use useCallback to prevent function recreation on every render
    const handleClickOutside = useCallback((event) => {
        if (isSidebarOpen && !event.target.closest('.bottom-nav')) {
            setIsSidebarOpen(false);
        }
    }, [isSidebarOpen]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]); // Only re-run when `handleClickOutside` changes

    return (
        <header>
            <nav>
                <div className="contact">
                    <a href="tel:+91 9433119893">
                        <span>+91 94331-19893</span>
                    </a>
                    <a href="mailto:ashisnaskar379@gmail.com">
                        <span>ashisnaskar379@gmail.com</span>
                    </a>
                </div>
            </nav>
            <div className={`bottom-nav ${isScrolled ? 'scrolled' : ''}`}>
                <div className="in">
                    <div className="logo">
                        {!isScrolled && <Link to='/'><img src={LogoLight} alt="Happy Nook Associates" /></Link>}
                        {isScrolled && <Link to='/'><img src={LogoDark} alt="Happy Nook Associates" /></Link>}
                    </div>
                    <ul className={`nav-links ${isSidebarOpen ? 'open' : ''}`}>
                        <li><Link onClick={toggleSidebar} to='/'>Home</Link></li>
                        <li><Link onClick={toggleSidebar} to='/about'>About Us</Link></li>
                        <li><Link onClick={toggleSidebar} title="Our Architecture Services in Kolkata" to='/what-we-do'>What We Do</Link></li>
                        <li><Link onClick={toggleSidebar} to='/portfolio'>Portfolio</Link></li>
                        <li><Link onClick={toggleSidebar} to='/contact'>Contact Us</Link></li>
                        <li><Link onClick={toggleSidebar} to='/contact' className="btn">Get Started</Link></li>
                    </ul>
                    <button aria-label="hamburger" className={!isSidebarOpen ? 'hamburger' : 'hidden'} onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    {isSidebarOpen && <div className="close-sidebar"><button onClick={toggleSidebar}><RiCloseLine /></button></div>}
                </div>
            </div>
        </header>
    );
};

export default Header;
