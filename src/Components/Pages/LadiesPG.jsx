import React, { useEffect } from 'react';
import pg from '../Assets/pgin.jpg';
import bnr from '../Assets/bnr.jpg';
import s24 from '../Assets/s24.png';
import k from '../Assets/kitchen.jpg';
import water from '../Assets/water.png';
import AC from '../Assets/AC.png';
import wifi from '../Assets/wifi.png';
import Laundry from '../Assets/Laundry.png';
import CommonBanner from '../Common/CommonBanner';
import Aos from 'aos';

const LadiesPG = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true, offset: 80 });
        document.title = "PG - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
    }, [])
    return (
        <div>
            <CommonBanner heading='Ladies PG' bg={bnr} />
            {/* About Us Section */}
            <section id="about" className='pg-about'>
                <h2>About Us</h2>
                <p>Naskar Villa Ladies PG is a comfortable and secure ladies' PG offering a home away from home. We provide fully air-conditioned rooms with attached kitchens, ensuring convenience for every resident. With 24-hour water supply and high-speed Wi-Fi, we cater to the needs of modern living. Our focus on safety and comfort makes us the ideal choice for women seeking a peaceful and well-equipped living environment.</p>
                <img src={pg} alt="Hostel Interior" className='aboutImage' />
            </section>

            {/* Services Section */}
            <section id="services" className='pg-services'>
                <h2>Our Services</h2>
                <div className='serviceCard'>
                    <img src={s24} alt="Security" className='serviceIcon' />
                    <h3>24/7 Security</h3>
                    <p>Safe and secure environment for all residents.</p>
                </div>
                <div className='serviceCard'>
                    <img src={k} alt="Kitchen" className='serviceIcon' />
                    <h3>Fully Equipped Kitchens</h3>
                    <p>Each room comes with a fully equipped kitchen for your convenience.</p>
                </div>
                <div className='serviceCard'>
                    <img src={water} alt="Water Supply" className='serviceIcon' />
                    <h3>24-Hour Water Supply</h3>
                    <p>Consistent access to water throughout the day.</p>
                </div>
                <div className='serviceCard'>
                    <img src={wifi} alt="Wi-Fi" className='serviceIcon' />
                    <h3>High-Speed Wi-Fi</h3>
                    <p>Stay connected with high-speed internet access.</p>
                </div>
                {/* Add more service cards as needed */}
            </section>

            {/* Amenities Section */}
            <section id="amenities" className='amenities'>
                <h2>Amenities</h2>
                <div className='amenity'>
                    <img src={AC} alt="Air Conditioning" className='amenityIcon' />
                    <p>Air Conditioning</p>
                </div>
                <div className='amenity'>
                    <img src={Laundry} alt="Laundry" className='amenityIcon' />
                    <p>Laundry Facilities</p>
                </div>
                {/* Add more amenities as needed */}
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className='pg-testimonials'>
                <h2>What Our Residents Say</h2>
                <div className='testimonialSlider'>
                    <div className='testimonial'>
                        <p>"I love living here! The staff is friendly and the rooms are cozy."</p>
                        <p>- Jane Doe</p>
                    </div>
                    <div className='testimonial'>
                        <p>"Naskar Villa provides everything I need for a comfortable stay. Highly recommended!"</p>
                        <p>- Mary Smith</p>
                    </div>
                    {/* Add more testimonials as needed */}
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className='pg-gallery'>
                <h2>Gallery</h2>
                <div className='galleryGrid'>
                    <img src="room1.jpg" alt="Room 1" className='galleryImage' />
                    <img src="room2.jpg" alt="Room 2" className='galleryImage' />
                    {/* Add more images as needed */}
                </div>
            </section>

            {/* Contact Us Section */}
            <section id="contact" className='pg-contact'>
                <h2>Get In Touch</h2>
                <form action="#" method="post" className='contactForm'>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit" className='submitButton'>Send Message</button>
                </form>
                <p>123 Naskar Street, City, State, ZIP</p>
                <p>(123) 456-7890</p>
                <p>info@naskartvilla.com</p>
                <div id="map" className='map'></div> {/* Embed Google Map here */}
            </section>
        </div>
    )
}

export default LadiesPG;
