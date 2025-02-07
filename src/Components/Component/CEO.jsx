import React from 'react';
import bg from '../Assets/CEO.jpg';

const CEO = () => {
    return (
        <div className='ceo container'>
            <div className="lft">
                <img data-aos='fade-right' src={bg} loading="lazy" alt="CEO" />
                <p>Ashis Naskar</p>
                <small>Signature</small>
            </div>
            <div data-aos='fade-up' className="rht">
                <h2>"Meet Our CEO"</h2>
                <p>Ashis Naskar is a visionary leader and the CEO of Happy Nook Associates, a distinguished firm specializing in civil service and architectural engineering. With over 25 years of experience in the industry, Ashis has been instrumental in shaping the company's reputation for excellence, innovation, and client-centric solutions.</p>
            </div>

        </div>
    );
};

export default CEO;
