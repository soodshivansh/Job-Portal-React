import React from 'react'
import img from '../../assets/undraw_interview_re_e5jn.svg'

const Hero = () => {
  return (
    <div>
        <section className="hero">
            <div className="hero-para">
                <p className="p1">Guiding people in today's world towards <span style={{"color": "#B4F763"}}>success</span></p>
                <p className="p2">Looking for a job? Join <span style={{"color": "black","font-weight": "500"}}>Jobstop</span> today and find your dream career. We connect you with top employers and opportunities. Apply now and get hired fast!
                </p>
                <a href="./jobpage.html"><button>Find your dream job</button></a>
            </div>
            <div className="hero-img">
                <div className="inside-hero-img">
                    <img src={img} alt=" image" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero
