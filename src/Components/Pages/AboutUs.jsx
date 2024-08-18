import React, { useEffect } from 'react';
import Contact from '../Common/Contact';
import CommonBanner from '../Common/CommonBanner';
import bg from '../Assets/AboutBanner.jpg';
import rhtbg from '../Assets/AboutPage.jpg';
import About from '../Component/About';
import 'aos/dist/aos.css';
import Aos from 'aos';
import CEO from '../Component/CEO';
import History from '../Component/AboutComponents/History';

const AboutUs = React.memo(() => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true, offset: 80 });
        document.title = "About - Happy Nook Associates | Building Development | Engineering Consultant | Engineers";
    }, [])


    const handleScrollToHistory = () => {
        const historySection = document.getElementById('history-section');
        const headerOffset = 120;
        const elementPosition = historySection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };
    return (
        <div>
            <CommonBanner heading='About Us' bg={bg} />
            <About
                lfttxt='We exist to identify opportunities, overcome challenges, maximize potential, and achieve fulfillment.'
                rhttxt1='At Happy Nook Associates (HNA), we strive to be an extension of your team, not just an engineering consultant. For 25 years our mission has been a commitment to providing the highest quality services, going above and beyond expectations. We are passionate about every project we do – whether it be a mid-rise or a site inspection.'
                rhttxt2='With three offices we have an ever-growing pool of talent dedicated to collaboration with our clients, and with one another. Our multidisciplinary experience allows us to explore unconventional solutions and unique expertise. Understanding what issues are important to our clients and community is necessary in problem-solving. We make the difference.'
                btntxt='Our History'
                onClick={handleScrollToHistory}
                rhtimg={rhtbg}
            />
            <CEO />
            <History />
            <Contact />
        </div>
    );
});

export default AboutUs;
