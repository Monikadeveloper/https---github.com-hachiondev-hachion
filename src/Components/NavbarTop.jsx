import React from 'react'
import logo from '../Assets/logo.png'
import './Home.css';
import { IoSearch } from "react-icons/io5";
import {Link} from 'react-router-dom';

const NavbarTop = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={logo} alt='logo'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="search-div" role="search">
        <input className="search-input"  type="search" placeholder ="Enter Courses, Category or Keywords" aria-label="Search"/>
        <button className="btn-search" type="submit"><IoSearch style={{fontSize:'2rem'}}/></button>
      </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
           <Link to='/' className='nav-item-link'>Corporate Training</Link>
        </li>
       
        <li class="nav-item">
           <Link to='/course' className='nav-item-link'>Courses</Link>
        </li>
        <li class="nav-item">
           <Link to='#' className='nav-item-link'>Hire from us</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
   
   </>
  )
}

export default NavbarTop
