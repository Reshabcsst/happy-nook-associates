import React from 'react';
import about from '../Assets/About-img.jpg';
import { useNavigate } from 'react-router-dom';

const About = ({ rhttxt1, rhttxt2, lfttxt, btntxt, rhtimg, onClick }) => {
    const navigate = useNavigate();
    return (
        <div className='about container'>
            <div className="lft">
                <div className="l">
                    <h2>About Us</h2>
                    <h3 data-aos="fade-right">Core Purpose</h3>
                    {lfttxt ?
                        <p>{lfttxt}</p>
                        :
                        <p>
                            Happy Nook Associates specializes in architectural planning, structural design, and construction development, with a strong focus on fast KMC sanction approvals. We streamline the building approval process, ensuring quick and hassle-free approvals. Our expert team delivers reliable engineering solutions for residential, commercial, and industrial projects.
                        </p>
                    }
                </div>
                <div className="r">
                    {rhttxt1 ?
                        <p>{rhttxt1}</p>
                        :
                        <p>Our multidisciplinary experience allows us to explore unconventional solutions and unique expertise. Understanding what issues are important to our clients and community is necessary in problem solving.</p>
                    }
                    {rhttxt2 ?
                        <p>{rhttxt2}</p>
                        :
                        <p>Our philosophy develops through a healthy culture that maximizes individual passion and potential. We leverage our resources to maximize our quality and profitability.</p>
                    }
                    <button onClick={() => (!btntxt ? navigate('/about') : onClick())} className='button-contained'>
                        {btntxt ?
                            <>{btntxt}</>
                            :
                            <>Our Whole Story</>
                        }
                    </button>
                </div>
            </div>
            <div data-aos="fade-up" className="rht">
                <img src={rhtimg ? rhtimg : about} alt="about" loading="lazy" />
            </div>
        </div>
    );
};

export default About;
