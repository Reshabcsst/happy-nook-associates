import React, { useEffect, useState } from 'react';
import Pic2 from '../Assets/Pic2.jpg';
import Pic3 from '../Assets/Pic3.jpg';
import Pic4 from '../Assets/Bg.jpg';
import Pic5 from '../Assets/Bg1.jpg';
import Pic6 from '../Assets/Bg2.jpg';
import Pic7 from '../Assets/Bg3.jpg';
import Pic8 from '../Assets/Bg4.jpg';
import Pic9 from '../Assets/Bg5.jpg';
import Pic10 from '../Assets/Bg6.jpg';
import Pic11 from '../Assets/Bg7.jpg';
import './Style.scss';

const Banner = React.memo(() => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        Pic6,
        Pic3,
        Pic2,
        Pic4,
        Pic5,
        Pic7,
        Pic8,
        Pic9,
        Pic10,
        Pic11
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

    useEffect(() => {
        const preloadImages = () => {
            images.forEach((image) => {
                const img = new Image();
                img.src = image;
            });
        };
        preloadImages();
    }, [images]);

    return (
        <div className="carousel">
            <img
                src={images[activeIndex]}
                alt={`Slide ${activeIndex}`}
                className="carousel__img"
                loading="lazy"
            />

            <div className="texts">
                <p data-aos="fade-right" className='fisrt-tag'>We invest in people.</p>
                <h1 data-aos="fade-right" data-aos-duration='1000' className='heading'>
                    Identify opportunities<span>,</span> overcome challenges<span>,</span>
                    maximize potential<span>,</span> achieve fulfillment<span>.</span>
                </h1>
                <p data-aos="fade-right" data-aos-duration="500" className='subheading'>
                    At Happy Nook Associates (HNA), we strive to be an extension of your team, not just an engineering consultant. We are passionate about every project we do – whether it be a mid-rise or a site inspection.
                </p>
                <div data-aos="fade-right" data-aos-duration="5000" className="btns">
                    <button className='button-contained'>Get In Touch</button>
                    <button className='button-outlined'>Portfolio</button>
                </div>
            </div>
        </div>
    );
});

export default Banner;
