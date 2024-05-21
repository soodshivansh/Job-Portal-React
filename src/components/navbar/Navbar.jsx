import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom border-body px-5" style={{"backgroundColor": "white"}}>
        <div className="container-fluid">
          <div className="navbar-brand">
            <a><strong>Jobstop</strong></a>
          </div>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-4 ms-lg-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#job-openings">Top openings</a>
              </li>
              <li className="nav-item">
                <Link to="/jobpage"><a className="nav-link">Find job</a></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="show-signup" href="#">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
