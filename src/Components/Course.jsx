import React from 'react';
import Topbar from './Topbar';
import NavbarTop from './NavbarTop';
import Sidebar from './Sidebar';
import './Course.css';
import Footer from './Footer';
import SidebarCard from './SidebarCard';
import Pagination from './Pagination';


const Course = () => {
  return (
    <>
    <div className='course-top'>
    <Topbar/>
    <NavbarTop/>
    <div className='course-banner'>
        <h3 className='course-banner-content'>Courses</h3>
    </div>
   
    <div className='sidebar-top'>
    <Sidebar/>

    <div className='sidebar-right'>
        <div className='sidebar-right-all'>
    <SidebarCard/>
    <SidebarCard/>
    <SidebarCard/>
    <SidebarCard/>
    </div>
    <div className='sidebar-right-all'>
    <SidebarCard/>
    <SidebarCard/>
    <SidebarCard/>
    <SidebarCard/>
    </div>
    <div className='sidebar-right-all'>
    <SidebarCard/>
    <SidebarCard/>
    <SidebarCard/>
    <SidebarCard/>
    </div>
    <div className='sidebar-right-all'>
    <SidebarCard/>
    <SidebarCard/>
    <SidebarCard/>
    <SidebarCard/>
    </div>
    <Pagination/>
    </div>
    </div>
    <Footer/>
</div>

    </>
  )
}

export default Course
