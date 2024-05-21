import React from 'react'
import user1 from '../assets/avatar1.png'
import user2 from '../assets/avatar2.png'
import user3 from '../assets/avatar3.png'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="wrapper-top">
        <div className="images">
          <div className="image-card c1">
            <img src={user1} />
          </div>
          <div className="image-card c2">
            <img src={user2} />
          </div>
          <div className="image-card c3">
            <img src={user3} />
          </div>
        </div>
        <button>Testimonials</button>
        <p>Thousands of users have already got job</p>
      </div>
      <div className="reviews">

        <div id="textCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="cardd">
                <h5>User1</h5>
                <p>Found my dream job in no time! User-friendly site, easy navigation, and tons of opportunities. Highly recommend!</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="cardd">
                <h5>User2</h5>
                <p>Landed my first job fast! User-friendly interface, updated listings, and seamless application process. Thank you!</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="cardd">
                <h5>User3</h5>
                <p>Years of success! Robust search, diverse job database, and handy features. The go-to site for career growth!</p>
              </div>
            </div>
            
          </div>
          <a className="carousel-control-prev" href="#textCarousel" role="button" data-slide="prev">
            <i className="fa-solid fa-angle-left" id="prevBtn"></i>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#textCarousel" role="button" data-slide="next">
            <i className="fa-solid fa-angle-right" id="nextBtn"></i>
            <span className="sr-only">Next</span>
          </a>
        </div>


      </div>
    </section>
  )
}

export default Testimonials
