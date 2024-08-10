import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Style.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ImageScroll = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "none", 
        duration: 1,
      },
    });

    // Add animations for each image
    tl.fromTo(".ImageScroll__image-1", { xPercent: 0 }, { xPercent: -100 }, 0)

    ScrollTrigger.create({
      trigger: "section",
      start: "top top", 
      end: "bottom top", 
      scrub: 1, 
      markers: false, 
      animation: tl,
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <section>
      <div className="ImageScroll__wrapper">
        <div className="ImageScroll__image ImageScroll__image-1"></div>
      </div>
    </section>
  );
};

export default ImageScroll;