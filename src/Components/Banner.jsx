import React from 'react'
import slider from '../Assets/product-banner.jpg';
import slider2 from '../Assets/staff-argbanner.jpg';
import slider3 from '../Assets/1000_F_531132502_uz3lJnnIuI1N6TEmrpRNdalUxE5kFSjX.jpg';

import './Home.css';

const Banner = () => {
  return (<>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider} className="d-block w-100" alt="image"/>
    </div>
    <div className="carousel-item">
      <img src={slider2} className="d-block w-100" alt="image"/>
    </div>
    <div className="carousel-item">
      <img src={slider3} className="d-block w-100" alt="image"/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</> )
}

export default Banner