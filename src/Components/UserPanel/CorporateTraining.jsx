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
import CorporateTrainingFeature from './CorporateTrainingFeature';
import Learners from './Learners';
import Advisor from './Advisor';

const CorporateTraining = () => {
  return (
    <>
    
    <Topbar/>
    <div className='corporate-training'>
    <NavbarTop/>
    <CorporateBanner/>
    <Association/>
   
    <Hachion/>
    <CustomizeTraining/>
    <LeadingExpert/>
    <CorporateTrainingFeature/>
    <Learners/>
    <Advisor/>
   
    </div>
    <Footer/>
    <StickyBar/>
    </>
  )
}

export default CorporateTraining