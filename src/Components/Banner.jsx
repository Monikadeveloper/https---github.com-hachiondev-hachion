import React from 'react'
import Banner1 from '../Assets/Banner1.png'
import Banner2 from '../Assets/Banner2.png'
import './Home.css';

const Banner = () => {
  return (<>
    <div id="carouselExampleCaptions" className="carousel slide">
     <div className="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
     
     </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Banner1} className="d-block w-100" alt="Banner1"/>
        <div className="carousel-caption">
          <div className="banner-content">
          <h1 className='career-skills'>Enhance your career skills with the best</h1>
          <h1 className='career-skills'>online courses</h1>
          <p className='discount'>Flat 10% Off + 20% Cashback</p>
          <p className='course-discount'>on selected courses</p>
          <button className='coupon-btn'>Coupon: Hach10</button>
        </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Banner2} class="d-block w-100" alt="Banner2"/>
        <div class="carousel-caption">
          <div className='banner-content-second'>
          <h1 className='banner-head'>Live webinar</h1>
          <p className='banner-second'>"Mastering Data Science: Live Q&A with Experts"</p>
          <p className='live-session'>2-hour <span className='live-session-span'>live session</span></p>
          <button className='register-now-btn'>Register Now</button>
        </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</> )
}

export default Banner