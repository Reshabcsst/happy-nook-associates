import React, { useRef, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const captchaRef = useRef(null);
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

        const captchaValue = captchaRef.current.getValue();
        if (!captchaValue) {
            setStatus('Please check the captcha.');
            return;
        }

        if (captchaValue) {
            setStatus('');
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
            captchaRef.current.reset();
        } catch (error) {
            setStatus('Something went wrong. Please try again later.');
        }
    };


    return (
        <div className='contact-form container'>
            <div className="lft">
                <form ref={formRef} onSubmit={FormSubmit}>
                    <h2>Keep in Touch<span>!</span></h2>
                    <h3>We’re thrilled you’ve decided to reach out. Whether you have a question, comment, or just want to share some feedback, we’re all ears. Fill out the form below and our team will get back to you as soon as possible.</h3>
                    <p>Thank you for your interest.</p>
                    <div className="inputs">
                        <input
                            name='name'
                            type="text"
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            name='email'
                            type="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <input
                            name='phone'
                            type="number"
                            placeholder='Phone Number'
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        <input
                            name='subject'
                            type="text"
                            placeholder='Subject'
                            value={formData.subject}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name='message'
                            rows={4}
                            placeholder='Message'
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                        {status && <p className="status-message">{status}</p>}
                    </div>
                    <ReCAPTCHA className='captcha' sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div className="rht">
                <iframe
                    name='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319.1388610589409!2d88.36483976999067!3d22.590183848956585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779f4d0e8143%3A0xf5a6319b3bf8051e!2sSai%20Krishna%20Apartment!5e1!3m2!1sen!2sin!4v1723988872218!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
