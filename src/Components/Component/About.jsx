<<<<<<< HEAD
import React from 'react';
import './Styles.scss';
import about from '../Assets/About-img.jpg';

const About = () => {
    return (
        <div className='about container'>
            <div className="lft">
                <div className="l">
                    <h2>About Us</h2>
                    <h3>Core Purpose</h3>
                    <p>Happy Nook Associates works to create architectural plans related to buildings as well as Structural Designs and deals with construction related matters and Development.</p>
                </div>
                <div className="r">
                    <p>Our multidisciplinary experience allows us to explore unconventional solutions and unique expertise. Understanding what issues are important to our clients and community is necessary in problem solving.</p>
                    <p>Our philosophy develops through a healthy culture that maximizes individual passion and potential. We leverage our resources to maximize our quality and profitability.</p>
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
=======
>>>>>>> 7eea7fed2356b029f837d87676cee676ba885310
