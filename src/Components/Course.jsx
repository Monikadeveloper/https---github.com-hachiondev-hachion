import React from 'react';
import Topbar from './Topbar';
import NavbarTop from './NavbarTop';
import Sidebar from './Sidebar';
import './Course.css';
import Footer from './Footer';

const Course = () => {
  return (
    <>
    <div className='course-top'>
    <Topbar/>
    <NavbarTop/>
    <div className='course-banner'>
    </div>
   
    <div className='sidebar-top'>
    <Sidebar/>
    <div className='sidebar-right'>
    Sidebar right
    </div>
    </div>
    <Footer/>
</div>

    </>
  )
}

export default Course
