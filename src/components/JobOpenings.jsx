import React from 'react'

const JobOpenings = () => {
  return (
    <section className="job-openings" id="job-openings">
      <p className="header"><span style={{"color": "#B4F763"}}>Latest and Top</span> Job Openings</p>
      <p className="para">Discover the fresh job from the giant firms around the globe in which you might want to apply and take a step forward to join top companies.</p>

      <div className="wrapper-card">
          <div className="opening-card">
              <h1>Figma (USA)</h1>
              <h3>Senior Product Manager</h3>
              <p>Join our innovative team and work on cutting-edge projects to build next-gen software solutions.</p>
          </div>
          <div className="opening-card">
              <h1>Just Pay</h1>
              <h3>Software Developer</h3>
              <p>Your job role would be to resolve company product related issues and guide product designers...</p>
          </div>
          <div className="opening-card">
              <h1>Google</h1>
              <h3>Data Analyst</h3>
              <p>We're looking for a detail-oriented data analyst to derive insights from large datasets and drive data-driven decisions.</p>
          </div>
          <div className="opening-card" id="op1">
              <h1>EcoTech Innovations (Germany)</h1>
              <h3>Sustainability Engineer</h3>
              <p>Be a part of our mission to create sustainable solutions. We're hiring engineers passionate about environmental innovation.</p>
          </div>
          <div className="opening-card" id="op2">
              <h1>Meta</h1>
              <h3>Graphic Designer</h3>
              <p>Shape the visual identity of our projects as a graphic designer. Bring creativity and design excellence to our team.</p>
          </div>
          <div className="opening-card" id="op3">
              <h1>HealthTech Solutions (India)</h1>
              <h3>Healthcare Software Architect</h3>
              <p>We're seeking an experienced software architect to lead the design and development of healthcare software applications.</p>
          </div>
      </div>
    </section>
  )
}

export default JobOpenings
