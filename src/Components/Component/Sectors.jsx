import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const Sectors = () => {
    return (
        <div className='sectors'>
            <div className="dt container">
                <div  data-aos="fade-left" className="inr">
                    <h2>Our Sectors<span>.</span></h2>
                    <p>At Happy Nook Associates, we strive to be an extension of your team, not just an engineering consultant. We exist to create opportunity, to overcome challanges, and to maximize potential in all industries we serve.</p>
                    <div className="sector">
                        <div className="st">
                            <ul>
                                <li><MdOutlineKeyboardDoubleArrowRight />Apartments/Condos</li>
                                <li><MdOutlineKeyboardDoubleArrowRight />Municipal/Justice</li>
                                <li><MdOutlineKeyboardDoubleArrowRight />Retail/Restaurants</li>
                            </ul>

                        </div>
                        <div className="st">
                            <ul>
                                <li><MdOutlineKeyboardDoubleArrowRight />Retrofit/Restoration</li>
                                <li><MdOutlineKeyboardDoubleArrowRight />Hospitals/Medical</li>
                                <li><MdOutlineKeyboardDoubleArrowRight />Office Buildings</li>
                            </ul>
                        </div>
                        <div className="st">
                            <ul>
                                <li><MdOutlineKeyboardDoubleArrowRight />Hotels/Resorts</li>
                                <li><MdOutlineKeyboardDoubleArrowRight />Mixed Use</li>
                                <li><MdOutlineKeyboardDoubleArrowRight />Religious Facilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sectors;
