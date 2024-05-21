import React from 'react'

const WrapperQuick = () => {
  return (
    <div class="wrapper-quick">
        <p className="p1">Get hired in <span style={{"color": "#B4F763"}}>4 Quick easy steps</span></p>
        <div className="wrapper-card">
            <div className="card c1" style={{"width": "16rem"}}>
            <div className="card-body">
                <div className="wrapper-icon" style={{"background-color": "#fff9f6"}}>
                <i className="fa-solid fa-user" style={{"color": "#fa4f08"}}></i>
                </div>
                <h5 className="card-title">Create a account</h5>
                <p className="card-text">Signup for job applicant profile, post your qualifications, mention you experiances and expertise. Your are all set to find your dream job</p>
            </div>
            </div>
            <div className="card c2" style={{"width": "16rem"}}>
            <div className="card-body">
                <div className="wrapper-icon" style={{"background-color": "#e9ddff"}}>
                <i className="fa-solid fa-magnifying-glass" style={{"color": "#6a3c2"}}></i>
                </div>
                <h5 className="card-title">Search Job</h5>
                <p className="card-text">Once you set your job hunting parameters, you'all find many openings related to your career interest on the home page and even filter out some of the best jobs</p>
            </div>
            </div>
            <div className="card c3" style={{"width": "16rem"}}>
            <div className="card-body">
                <div className="wrapper-icon" style={{"background-color": "#f1fefe"}}>
                <i className="fa-solid fa-file" style={{"color": "#3ac3bb"}}></i>
                </div>
                <h5 className="card-title">Upload CV/Resume</h5>
                <p className="card-text">From numerous job openings, shortlist the right-match vacancy to your profile and apply right after by uploading your CV/Resume and answering a couple of questions</p>
            </div>
            </div>
            <div className="card c4" style={{"width": "16rem"}}>
            <div className="card-body">
                <div className="wrapper-icon" style={{"background-color": "#fdf5d9"}}>
                <i className="fa-solid fa-briefcase" style={{"color": "#fabd09"}}></i>
                </div>
                <h5 className="card-title">Get Job</h5>
                <p className="card-text">After applying, wait for some time, schedule an interview, and if everything goes right, then get hired more quickly than traditional hiring methods</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default WrapperQuick
