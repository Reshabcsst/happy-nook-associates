import React from 'react';
import './Style.scss';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div className='contact-small'>
            <div className="in container">
                <h2>Inventive<span>.</span> Constructible<span>.</span> Cost Effective<span>.</span></h2>
                <button onClick={() => { navigate('/contact') }}>Contact Us</button>
            </div>
        </div>
    );
};

export default Contact;
