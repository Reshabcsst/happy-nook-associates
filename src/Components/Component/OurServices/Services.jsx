import React from 'react';
import pic from '../../Assets/Bg3.jpg';

const Services = () => {
  return (
    <div className='our-services container'>
      <h2>Our Services</h2>
      <h3>Structural Engineering for the Architecture<span>,</span> Engineering <span>&</span> Construction Industry<span>.</span></h3>
      {/* Planning */}
      <div className="st">
        <div className="lft">
          <img src={pic} alt="" />
        </div>
        <div className="rht">
          <h4>Planning Services</h4>
          <h5>Structural Systems Evaluation</h5>
          <p>Every project is unique. Our team reviews multiple structural systems to determine the best fit for each project.</p>
          <h5>Preliminary Structural Design</h5>
          <p>Once a structural system has been evaluated, Happy Nook Associates works with the design team to develop a preliminary design and drawings for the client.</p>
          <h5>Structural Prototype Design</h5>
          <p>Happy Nook Associates has a history of working with clients–ranging from artists to manufacturers–to design prototype structures to test the market and manufacturing processes.</p>
          <h5>Material & Cost Estimating</h5>
          <p>Our collective experience helps us to provide our clients with material recommendations to reduce costs while maintaining the desired look and function of the structure.</p>
          <h5>Feasibility Studies</h5>
          <p>Our firm helps clients determine if their project is technically feasible and within the estimated costs. If it is determined that a project is cost prohibitive, HNA works with their clients to produce a sound project within budget.</p>
          <h5>Value Engineering</h5>
          <p>Happy Nook Associates works with value-engineering at the forefront of each project. We provide the best alternatives for every project.</p>
        </div>
      </div>

      {/* Design */}
      <div className="st">
        <div className="lft">
          <img src={pic} alt="" />
        </div>
        <div className="rht">
          <h4>Design Services</h4>
          <h5>Structural Design & Analysis</h5>
          <p>We work with our clients to determine the performance of a given structure under the prescribed loads and/or other effects while utilizing principles of statics, dynamics and mechanics of materials to determine the size and arrangement of structural elements under prescribed loads and/or other effects.</p>
          <h5>Seismic Analysis & Design</h5>
          <p>Happy Nook Associates specializes in seismic work, with many of our clients located in extreme environments that demand special design.</p>
          <h5>Seismic Upgrading & Retrofit</h5>
          <p>Happy Nook Associates specializes in analyzing and providing designs to bring buildings to current seismic standards. We also have extensive knowledge of retrofitting and reinforcing buildings damaged during a seismic event.</p>
          <h5>Building Rehabilitation</h5>
          <p>Happy Nook Associates works with clients on the retention and repair of historic or neglected buildings.</p>
          <h5>Site Adaptation of Structural Prototypes</h5>
          <p>We can help you create standard designs for structures ranging from carports to buildings that can be modified for the building code adopted at a specific project location.</p>
          <h5>Peer Review</h5>
          <p>Need a second opinion? Happy Nook Associates will assess the methodology employed by the designing engineer.</p>
          <h5>Computer Aided Design and Drafting (CADD)</h5>
          <p>Our Team uses the latest version of AutoCAD 3-D and Revit Structure.</p>
          <h5>Static & Dynamic Analysis</h5>
          <p>We use some of the latest structural engineering tools including ETABS, RISA-3D and RAM, among other structural design suites.</p>
          <h5>Building Information Modeling (BIM)</h5>
        </div>
      </div>

      {/* Construction Administration Services */}
      <div className="st">
        <div className="lft">
          <img src={pic} alt="" />
        </div>
        <div className="rht">
          <h4>Construction Administration Services</h4>
          <h5>Special Structural Inspections (SSI)</h5>
          <p>Happy Nook Associates provides special structural inspections to ensure projects are completed with the care and quality as defined by the contract documents. Our inspectors have experience and training in:</p>
          <h5>Construction Administration</h5>
          <p>We provide shop drawing review, responses to requests for information and interpretation of drawings.</p>
          <h5>Construction Observations & Reports</h5>
          <p>We provide construction observations and reports as required by varying building jurisdictions or as requested by the client.</p>
        </div>
      </div>


      {/* Inspection Services */}
      <div className="st">
        <div className="lft">
          <img src={pic} alt="" />
        </div>
        <div className="rht">
          <h4>Inspection Services</h4>
          <p>Happy Nook Associates offers independent inspection services to owners, contractors and engineering firms. We help identify existing conditions, possible minor or hidden deficiencies, and present the information in a comprehensive report. We offer inspection of wood, masonry, concrete, post-installed anchors, high strength bolts, and post-tension construction in all of our markets. In our Alaska market, we also offer inspection of special reinforced concrete, drilled-in concrete anchors, pile and pier foundations, racks and access floors, steel, welding, high strength bolting, seismic and wind resisting systems and mechanical/electrical seismic bracing.</p>
        </div>
      </div>

      {/* Expert Witness Services */}
      <div className="st">
        <div className="lft">
          <img src={pic} alt="" />
        </div>
        <div className="rht">
          <h4>Expert Witness Services</h4>
          <p>Happy Nook Associates Senior staff is able to provide expert witness testimony for litigators and the property and casualty insurance industry. We focus on discovery deadlines, asking the right questions, suggesting documents and information to request, exhibit preparation, report writing, and—most of all—being responsive to the attorney’s needs and the needs of the entire legal team. Among our executives, we are licensed in Kolkata Municipal Corporation (KMC).</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
