import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RiCloseLine } from 'react-icons/ri';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log('clicked');
    };

    const handleClickOutside = (event) => {
        if (isSidebarOpen && !event.target.closest('.bottom-nav')) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSidebarOpen]);

    return (
        <header>
            <nav>
                <div className="contact">
                    <a href="tel:+919000110009">
                        <span>+91 ########09</span>
                    </a>
                    <a href="mailto:demo@example.com">
                        <span>Demo@gmail.com</span>
                    </a>
                </div>
            </nav>
            <div className="bottom-nav">
                <div className="in">
                    <div className="logo">
                        <Link to='/'><img src={"Logo"} alt="Happy Nook Associates" /></Link>
                    </div>
                    <ul className={`nav-links ${isSidebarOpen ? 'open' : ''}`}>
                        <li><Link onClick={toggleSidebar} to='/'>Home</Link></li>
                        <li><Link onClick={toggleSidebar} to='/about-us'>About Us</Link></li>
                        <li><Link onClick={toggleSidebar} to='/service'>What We Do</Link></li>
                        <li><Link onClick={toggleSidebar} to='/about-us'>Portfolio</Link></li>
                        <li><Link onClick={toggleSidebar} to='/partners'>Partners</Link></li>
                        <li><Link onClick={toggleSidebar} to='/contact-us'>Contact Us</Link></li>
                        <li><Link onClick={toggleSidebar} className="btn">Get Started</Link></li>
                    </ul>
                    <button className={!isSidebarOpen ? 'hamburger' : 'hidden'} onClick={toggleSidebar}>
                        <FaBars />
                    </button>
                    {isSidebarOpen && <div className="close-sidebar"><button onClick={toggleSidebar}><RiCloseLine /></button></div>}
                </div>
            </div>
        </header>
    );
};

export default Header;
