import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img from '../Assets/Testimonials.png';
import TestimonialsData from '../DemoData/TestimonialsData';

const Testimonials = React.memo(() => {
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
                <h3 data-aos="fade-right">Kind Words From Clients<span>.</span></h3>
                <div className="btm">
                    <div className="lft-sec">
                        <Carousel
                            showDots={false}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={8000}
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
                        <img loading="lazy" src={img} alt="Testimonials" />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Testimonials;
