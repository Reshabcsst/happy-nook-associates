import React from 'react';
import Project1 from '../Assets/Project1.jpg';
import Project2 from '../Assets/Project2.jpg';
import Project3 from '../Assets/Project3.jpg';
import Project4 from '../Assets/Project4.jpg';
import Project5 from '../Assets/Project5.jpg';
import Project6 from '../Assets/Project6.jpg';

const LatestProjects = () => {
    const LatestProjects = [
        { id: 1, image: Project1, name: 'Project One' },
        { id: 2, image: Project2, name: 'Project Two' },
        { id: 3, image: Project3, name: 'Project Three' },
        { id: 4, image: Project4, name: 'Project Four' },
        { id: 5, image: Project5, name: 'Project Five' },
        { id: 6, image: Project6, name: 'Project Six' },
    ];
    return (
        <div className='latest-projects container'>
            <div className="upr">
                <div className="lft">
                    <h2>Our Latest Projects</h2>
                    <h3>Creating Elegant Solutions<span>.</span></h3>
                </div>
                <div className="rht">
                    <p>From planning and design to construction administration, our portfolio highlights our diverse expertise, innovative solutions, and the successful projects that we have completed, demonstrating our ability to meet and exceed client expectations.</p>
                </div>
            </div>
            <div className="lwr">
                <div className="gallery">
                    {LatestProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="gallery-item"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="gallery-image"
                            />
                            <div className="overlay">
                                <p className="project-name">{project.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='button-contained'>See More</button>
            </div>
        </div>
    );
};

export default LatestProjects;
