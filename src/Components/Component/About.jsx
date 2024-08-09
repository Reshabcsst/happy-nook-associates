import React from 'react';
import './Styles.scss';
import about from '../Assets/About-img.jpg';

const About = () => {
    return (
        <div className='about container'>
            <div className="lft">
                <div className="l">
                    <h3>About Us</h3>
                    <h2>Core Purpose</h2>
                    <p>For 25 years our mission has been a commitment to providing the highest quality services, going above and beyond expectations.</p>
                </div>
                <div className="r">
                    <p>Welcome to Happy Nook Associates, where 24 years of excellence meet innovative solutions. Founded in 2000, our company has proudly completed over 5,000 projects, earning a reputation for delivering outstanding civil services and engineering solutions.</p>
                    <button className='button-contained'>
                        Our  Whole Story
                    </button>
                </div>
            </div>
            <div className="rht">
                <img src={about} alt="about" />
            </div>
        </div>
    );
};

export default About;
