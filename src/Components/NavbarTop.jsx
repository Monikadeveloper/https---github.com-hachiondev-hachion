import React from 'react';
import logo from '../Assets/logo.png';
import './Home.css';
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const NavbarTop = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Corrected onClick attribute */}
          <img src={logo} alt='logo' onClick={handleClick} style={{ cursor: 'pointer' }} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="search-div" role="search">
            <input className="search-input" type="search" placeholder="Enter Courses, Category or Keywords" aria-label="Search" />
            <button className="btn-search" type="submit"><IoSearch style={{ fontSize: '2rem' }} /></button>
          </div>

          <div className="navbar-nav">
            <button className="nav-item">
              <Link to='/corporate' className='nav-item-link'>Corporate Training</Link>
            </button>
            <button className="nav-item">
              <Link to='/course' className='nav-item-link'>Courses</Link>
            </button>
            <button className="nav-item">
              <Link to='#' className='nav-item-link'>Hire from us</Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarTop;
