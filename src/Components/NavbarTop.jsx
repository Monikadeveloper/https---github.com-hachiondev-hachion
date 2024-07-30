import React from 'react'
import logo from '../Assets/logo.png'
import './Home.css';
import { IoSearch } from "react-icons/io5";
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
    <form className="d-flex" role="search">
        <input className="search-input"  type="search" placeholder ="Enter Courses, Category or Keywords" aria-label="Search"/>
        <button className="btn-search" type="submit"><IoSearch style={{fontSize:'2rem'}}/></button>
      </form>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Courses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">Hire from Us</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
   
   </>
  )
}

export default NavbarTop
