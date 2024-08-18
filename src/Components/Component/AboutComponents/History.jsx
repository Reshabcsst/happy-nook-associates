import React from 'react';
import historyData from '../../DemoData/historyData';

const History = () => {
  return (
    <div data-aos='fade-right' id="history-section" className='history container'>
      <h2>Our History<span>.</span></h2>
      <div className="tree">
        {historyData.map((event, index) => (
          <div className="st" key={index}>
            <h3>{event.year}</h3>
            <div className="dt">
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
