import React, { useEffect, useRef, useState } from 'react';
import pg from '../Assets/pgin.jpg';
import bnr from '../Assets/bnr.jpg';
import s24 from '../Assets/s24.png';
import k from '../Assets/kitchen.jpg';
import water from '../Assets/water.png';
import AC from '../Assets/AC.png';
import wifi from '../Assets/wifi.png';
import Laundry from '../Assets/Laundry.png';
import CommonBanner from '../Common/CommonBanner';
import emailjs from 'emailjs-com';
import Aos from 'aos';

const LadiesPG = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true, offset: 80 });
        document.title = "PG - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
    }, [])


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const formRef = useRef();
    const [status, setStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStatus('');
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const FormSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            setStatus('Please fill in all fields.');
            return;
        }


        try {
            await emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_USER_ID
            );

            setStatus('Thank you for your message! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            setTimeout(() => {
                setStatus('');
            }, 2000);
        } catch (error) {
            setStatus('Something went wrong. Please try again later.');
        }
    };
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
                <div className="in">
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
                </div>

            </section>

            {/* Amenities Section */}
            <section id="amenities" className='amenities'>
                <h2>Amenities</h2>
                <div className="in">
                    <div className='amenity'>
                        <img src={AC} alt="Air Conditioning" className='amenityIcon' />
                        <p>Air Conditioning</p>
                    </div>
                    <div className='amenity'>
                        <img src={Laundry} alt="Laundry" className='amenityIcon' />
                        <p>Laundry Facilities</p>
                    </div>
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
                <form ref={formRef} onSubmit={FormSubmit} className='contactForm'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="phone">Subject</label>
                    <input
                        name='subject'
                        type="text"
                        placeholder='Subject'
                        value={formData.subject}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    {status && <p className="status-message">{status}</p>}

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
