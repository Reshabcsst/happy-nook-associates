import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../Assets/Testimonials.png';

const Testimonials = () => {
    const TestimonialsData = [
        {
            text: '"They love to seek innovative solutions. They used a combination of modern engineering and old­school carpentry framing to achieve the energy ­efficient goal while retaining a really nice hand­built look."',
            name: 'Asuthosh Biswas',
            role: 'Professional Builder'
        },
        {
            text: '"They love to seek innovative solutions. They used a combination of modern engineering and old­school carpentry framing to achieve the energy ­efficient goal while retaining a really nice hand­built look."',
            name: 'Narendra Paul',
            role: 'Professional Builder'
        },
        {
            text: '"They love to seek innovative solutions. They used a combination of modern engineering and old­school carpentry framing to achieve the energy ­efficient goal while retaining a really nice hand­built look."',
            name: 'Tony Sarkar',
            role: 'Professional Builder'
        },
        {
            text: '"They love to seek innovative solutions. They used a combination of modern engineering and old­school carpentry framing to achieve the energy ­efficient goal while retaining a really nice hand­built look."',
            name: 'Prafulla Bera',
            role: 'Professional Builder'
        },
        {
            text: '"They love to seek innovative solutions. They used a combination of modern engineering and old­school carpentry framing to achieve the energy ­efficient goal while retaining a really nice hand­built look."',
            name: 'Liton Shaw',
            role: 'Professional Builder'
        },
        {
            text: '"They love to seek innovative solutions. They used a combination of modern engineering and old­school carpentry framing to achieve the energy ­efficient goal while retaining a really nice hand­built look."',
            name: 'Ramesh Hela',
            role: 'Professional Builder'
        }
    ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='testimonials container'>
            <div className="inr">
                <h2>Testimonials</h2>
                <h3>Kind Words From Clients<span>.</span></h3>
                <div className="btm">
                    <div className="lft-sec">
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            showDots={false}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={8000}
                            keyBoardControl={true}
                            transitionDuration={600}
                            arrows={false}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            responsive={responsive}
                        >
                            {TestimonialsData.map((data, index) => {
                                return (
                                    <div key={index} className='feedback'>
                                        <p>{data.text}</p>
                                        <p className='name'>{data.name}</p>
                                        <small>{data.role}</small>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div className="rht-sec">
                        <img src={img} alt="Testimonials" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
