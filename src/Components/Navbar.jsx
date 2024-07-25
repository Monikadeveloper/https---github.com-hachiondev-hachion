import React from 'react'
import logo from '../Assets/logo.png'
import './Home.css';


const Navbar = () => {
  return (
   <>
  
   <nav className="navbar navbar-expand-lg bg-body-danger">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <div className='navbar-logo'>
        <img src={logo} alt='logo'/></div></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
            
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses
             </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Project Management(2)</a></li>
            <li><a className="dropdown-item" href="#">QA Testing(4)</a></li>
            <li><a className="dropdown-item" href="#">Business Intelligence(8)</a></li>
            <li><a className="dropdown-item" href="#">Data Science(3)</a></li>
            <li><a className="dropdown-item" href="#">Programming(11)</a></li>
            <li><a className="dropdown-item" href="#">Big Data(2)</a></li>
            <li><a className="dropdown-item" href="#">RPA(3)</a></li>
            <li><a className="dropdown-item" href="#">Salesforce(5)</a></li>
            <li><a className="dropdown-item" href="#">ServiceNow(1)</a></li>
            <li><a className="dropdown-item" href="#">Cloud Computing(7)</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">View More</a></li>
          </ul>
          
        </li>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="What do you want to learn today?" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    <div className='nav-right'>
      <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Careers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log in</a>
        </li>
       <div className='button'>
        <button type="button" class="btn btn-danger">Sign Up</button>
        </div>
        </div>
      </ul>
      
  </div>
  </div>
  </nav>

   
   </>
  )
}

export default Navbar