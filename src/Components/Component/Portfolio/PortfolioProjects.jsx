import React, { useState } from 'react';
import Projects from '../../DemoData/Projects';

const PortfolioProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isFlashboxVisible, setFlashboxVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredProjects = selectedCategory === 'all'
        ? Projects
        : Projects.filter(project => project.category === selectedCategory);


    const handleImageClick = (image) => {
        setSelectedImage(image);
        setFlashboxVisible(true);
    };

    const closeFlashbox = () => {
        setFlashboxVisible(false);
        setSelectedImage(null);
    };


    return (
        <div className='portfolio container'>
            <div className="tabs">
                <button
                    onClick={() => setSelectedCategory('all')}
                    className={selectedCategory === 'all' ? 'active' : ''}
                >
                    All
                </button>
                <button
                    onClick={() => setSelectedCategory('Apartments/Condos')}
                    className={selectedCategory === 'Apartments/Condos' ? 'active' : ''}
                >
                    Apartments/Condos
                </button>
                <button
                    onClick={() => setSelectedCategory('Religious Facilities')}
                    className={selectedCategory === 'Religious Facilities' ? 'active' : ''}
                >
                    Religious Facilities
                </button>
                <button
                    onClick={() => setSelectedCategory('Office Buildings')}
                    className={selectedCategory === 'Office Buildings' ? 'active' : ''}
                >
                    Office Buildings
                </button>
                <button
                    onClick={() => setSelectedCategory('Hotels/Resorts')}
                    className={selectedCategory === 'Hotels/Resorts' ? 'active' : ''}
                >
                    Hotels/Resorts
                </button>
                <button
                    onClick={() => setSelectedCategory('Mixed Use')}
                    className={selectedCategory === 'Mixed Use' ? 'active' : ''}
                >
                    Mixed Use
                </button>
            </div>

            <div className="project-main">
                {filteredProjects.map((project, index) => (
                    <div onClick={() => handleImageClick(project.image)} className='in' key={index}>
                        <img src={project.image} alt={project.name} loading="lazy" />
                        <h2>{project.name}</h2>
                    </div>
                ))}
            </div>

            {/* Flashbox for full-screen image */}
            {isFlashboxVisible && (
                <div className="flashbox" onClick={closeFlashbox}>
                    <img src={selectedImage} alt="Selected Project" className="flashbox-image" />
                    <button className="close-button" onClick={closeFlashbox}>X</button>
                </div>
            )}
        </div>
    );
};

export default PortfolioProjects;
