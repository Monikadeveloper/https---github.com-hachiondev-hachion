import React from 'react';
import Topbar from './Topbar';
import NavbarTop from './NavbarTop';
import './Course.css';
import Footer from './Footer';
import QaTop from './QaTop';
import KeyHighlights from './KeyHighlights';

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
    <Footer/>
    </div>
    </>)
}
 export default QaAutomation;
   