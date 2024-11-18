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
import img1 from '../Assets/PGImages/bg.jpeg';
import img2 from '../Assets/PGImages/bg1.jpeg';
import img3 from '../Assets/PGImages/br.jpeg';
import img4 from '../Assets/PGImages/br1.jpeg';
import img5 from '../Assets/PGImages/br2.jpeg';
import img6 from '../Assets/PGImages/kit.jpeg';
import img7 from '../Assets/PGImages/rm.jpeg';
import img8 from '../Assets/PGImages/rm1.jpeg';
import img9 from '../Assets/PGImages/rm2.jpeg';
import img10 from '../Assets/PGImages/rm3.jpeg';
import img11 from '../Assets/PGImages/rm4.jpeg';
import img12 from '../Assets/PGImages/rm5.jpeg';
import img13 from '../Assets/PGImages/rm6.jpeg';
import img14 from '../Assets/PGImages/rm7.jpeg';
import img15 from '../Assets/PGImages/rm8.jpeg';
import img16 from '../Assets/PGImages/rm9.jpeg';
import img17 from '../Assets/PGImages/st.jpeg';
import img18 from '../Assets/PGImages/tl.jpeg';
import img19 from '../Assets/PGImages/tl1.jpeg';
import Aos from 'aos';


const GalleryImages = [
    {
        img: img1
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img4
    },
    {
        img: img5
    },
    {
        img: img6
    },
    {
        img: img7
    },
    {
        img: img8
    },
    {
        img: img9
    },
    {
        img: img10
    },
    {
        img: img11
    },
    {
        img: img12
    },
    {
        img: img13
    },
    {
        img: img14
    },
    {
        img: img15
    },
    {
        img: img16
    },
    {
        img: img17
    },
    {
        img: img18
    },
    {
        img: img19
    }
];

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
                <p>Hi, Thank you for contacting Naskar Villa ladies pg. We would be delighted to help you with your querry Please call contact 9836075849,7003513253 further discussion.Our PG is located at the 30 Matkal 1st bye  lane dum dum cant kolkata 700065. Have a Good Day ! Naskar Villa Ladies PG is a comfortable and secure ladies' PG offering a home away from home. We provide fully air-conditioned rooms with attached kitchens, ensuring convenience for every resident. With 24-hour water supply and high-speed Wi-Fi, we cater to the needs of modern living. Our focus on safety and comfort makes us the ideal choice for women seeking a peaceful and well-equipped living environment.</p>
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
                    {GalleryImages.map((image, index) => {
                        return (
                            <img src={image.img} alt={index + 1} className='galleryImage' />
                        )
                    })}
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
                <p>30 Matkal 1st bye  lane dum dum cant kolkata 700065.</p>
                <p>+91 9836075849, +91 7003513253</p>
                <p>ashisnaskar379@gmail.com</p>
                <div id="map" className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d384.15765464567966!2d88.40422060996588!3d22.64781830115704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1731934826477!5m2!1sen!2sin" style={{height:"100%",width:"100%",border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </div>
    )
}

export default LadiesPG;
