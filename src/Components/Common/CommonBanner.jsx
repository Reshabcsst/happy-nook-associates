import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const CommonBanner = ({ heading, bg }) => {
    const { pathname } = useLocation();
    return (
        <div className='common-banner' style={{ backgroundImage: `url(${bg})` }}>
            <h1 data-aos='fade-right'>{heading}</h1>
            <div data-aos="fade-in" className="navigation">
                <span><Link to='/'>Home</Link></span><MdOutlineKeyboardDoubleArrowRight /><span>{pathname.replace(/\//g, '').replace(/-/g, ' ')}</span>
            </div>
        </div>
    );
};

export default CommonBanner;
