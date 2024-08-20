import React from 'react';
import Topbar from './Topbar';
import NavbarTop from './NavbarTop';
import './Course.css';
import Footer from './Footer';
import QaTop from './QaTop';
import KeyHighlights from './KeyHighlights';
import UpcomingHeader from './UpcomingHeader';
import UpcomingBatch from './UpcomingBatch';
import Corporate from './Corporate';
import Qacourse from './Qacourse';
import Curriculum from './Curriculum';

const QaAutomation = () => {
  return (
    <>
    <div className='course-top'>
    <Topbar/>
    <NavbarTop/>
    <div className='course-banner'>
        <h3 className='course-banner-content'>QA Automation</h3>
    </div>
   <QaTop/>
   <KeyHighlights/> 
   <UpcomingHeader/> 
   <UpcomingBatch/>
   <Corporate/>  
   <Qacourse/> 
   <Curriculum/>                                                                                                                                              
    <Footer/>
    </div>
    </>)
}
 export default QaAutomation;
   