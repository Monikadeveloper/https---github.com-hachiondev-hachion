import React from 'react';
import Topbar from './Topbar';
import NavbarTop from './NavbarTop';
import CorporateBanner from './CorporateBanner';
import Association from './Association';
import Hachion from './Hachion';
import CustomizeTraining from './CustomizeTraining';
import LeadingExpert from './LeadingExpert';
import Footer from './Footer';
import StickyBar from './StickyBar';

const CorporateTraining = () => {
  return (
    <>
    
    <Topbar/>
    <NavbarTop/>
    <CorporateBanner/>
    <Association/>
    <div className='corporate-training'>
    <Hachion/>
    <CustomizeTraining/>
    <LeadingExpert/>

    </div>
    <Footer/>
    <StickyBar/>
    </>
  )
}

export default CorporateTraining