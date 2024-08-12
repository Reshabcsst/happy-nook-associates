import React from 'react';
import './Styles.scss';

const CEO = () => {
    return (
        <div className='ceo container'>
            <div className="lft">
                <img src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4=" alt="" />
                <p>Ashis Naskar</p>
                <small>Signature</small>
            </div>
            <div className="rht">
                <h2>"Meet Our CEO"</h2>
                <p>Ashis Naskar is a visionary leader and the CEO of Happy Nook Associates, a distinguished firm specializing in civil service and architectural engineering. With over 25 years of experience in the industry, Ashis has been instrumental in shaping the company's reputation for excellence, innovation, and client-centric solutions.</p>
            </div>

        </div>
    );
};

export default CEO;
