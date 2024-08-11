import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const WhyChoseUs = () => {
    return (
        <div className='why-chose-us container'>
            <div className="lft">
                <div className="overlap">
                    <div className="num">

                    </div>
                    <p>Projects</p>
                </div>
            </div>
            <div className="rht">
                <h2>Why Choose Us</h2>
                <h3>Building Buildings<span>,</span> Building Relationships<span>.</span></h3>
                <p>We at Happy Nook Associates offer the building industry a creative alternative to standard structural engineering. Our experienced staff looks beyond conventional methods to find inventive, constructible, and cost-effective design solutions to meet client needs.</p>

                <div className="numbering">
                    <div className="st">
                        <ul>
                            <li><MdOutlineKeyboardDoubleArrowRight />Over 25 years of experience</li>
                            <li><MdOutlineKeyboardDoubleArrowRight />Professional Affiliations</li>
                        </ul>
                    </div>
                    <div className="st">
                        <ul>
                            <li><MdOutlineKeyboardDoubleArrowRight />Industry Recognitions</li>
                            <li><MdOutlineKeyboardDoubleArrowRight />Developing Individuals</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;
