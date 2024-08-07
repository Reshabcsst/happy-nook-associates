import React, { useEffect, useState } from 'react';
import Pic1 from '../Assets/Pic1.jpg';
import Pic2 from '../Assets/Pic2.jpg';
import Pic3 from '../Assets/Pic3.jpg';
import './Style.scss';

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        Pic3,
        Pic2,
        Pic1,
    ];
    const nextSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        const autoPlayInterval = setInterval(nextSlide, 10000);
        return () => {
            clearInterval(autoPlayInterval);
        };
    }, []);
    return (
        <div className="carousel">
            <img
                src={images[activeIndex]}
                alt={`Slide ${activeIndex}`}
                className="carousel__img"
            />

            <div className="texts">
                <p className='fisrt-tag'>We invest in people.</p>
                <h1 className='heading'>Identify opportunities<span>,</span> overcome challenges <span>,</span>
                    maximize potential<span>,</span> achieve fulfillment<span>.</span></h1>
                <p className='subheading'>At Happy Nook Associates (HNA), we strive to be an extension of your team, not just an engineering consultant. We are passionate about every project we do – whether it be a mid-rise or a site inspection.</p>
            </div>
        </div>
    )
}

export default Banner
