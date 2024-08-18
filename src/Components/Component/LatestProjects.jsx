import React from 'react';
import Projects from '../DemoData/Projects';
import { useNavigate } from 'react-router-dom';

const LatestProjects = () => {
    const navigate = useNavigate();
    return (
        <div className='latest-projects container'>
            <div className="upr">
                <div className="lft">
                    <h2>Our Latest Projects</h2>
                    <h3 data-aos="fade-right">Creating Elegant Solutions<span>.</span></h3>
                </div>
                <div className="rht">
                    <p data-aos="fade-up">From planning and design to construction administration, our portfolio highlights our diverse expertise, innovative solutions, and the successful projects that we have completed, demonstrating our ability to meet and exceed client expectations.</p>
                </div>
            </div>
            <div className="lwr">
                <div className="gallery">
                    {Projects.slice(0, 6).map((project, index) => (
                        <div
                            key={project.id}
                            className="gallery-item"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="gallery-image"
                                loading="lazy"
                            />
                            <div className="overlay">
                                <p className="project-name">{project.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={() => { navigate('/portfolio') }} className='button-contained'>See More</button>
            </div>
        </div>
    );
};

export default LatestProjects;
