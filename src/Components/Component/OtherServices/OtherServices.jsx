import React from 'react';
import AA from '../../Assets/construction.jpg';
import PG from '../../Assets/pg.jpg';
import Cafe from '../../Assets/cafe.jpg';

const OtherServices = () => {
    return (
        <div className='other-services container'>
            <h2 className='h'>Our Other Services<span>.</span></h2>
            <div className="in">
                <div className="srvs">
                    <img src={AA} alt="Ashis & Associates" />
                    <h2>Ashis & Associates</h2>
                    <h3>Building Developer</h3>
                    <p>Ashis & Associates is a premier building development company dedicated to transforming visions into reality. With a commitment to excellence and a passion for innovation, we specialize in creating high-quality residential and commercial properties that stand the test of time. Our experienced team works closely with clients to deliver projects that not only meet but exceed expectations. At Ashis & Associates, we believe in building more than just structures—we build lasting relationships and communities.</p>
                </div>



                <div className="srvs">
                    <img src={PG} alt="PG" />
                    <h2>Naskar Villa Ladies PG</h2>
                    <h3>ladies' PG</h3>
                    <p>Naskar Villa Ladies PG is a comfortable and secure ladies' PG offering a home away from home. We provide fully air-conditioned rooms with attached kitchens, ensuring convenience for every resident. With 24-hour water supply and high-speed Wi-Fi, we cater to the needs of modern living. Our focus on safety and comfort makes us the ideal choice for women seeking a peaceful and well-equipped living environment.</p>
                </div>



                <div className="srvs">
                    <img src={Cafe} alt="Cafe" />
                    <h2>Ashis & Associates</h2>
                    <h3>Multi Purpose Cafe</h3>
                    <p></p>
                </div>
            </div>


        </div>
    );
};

export default OtherServices;