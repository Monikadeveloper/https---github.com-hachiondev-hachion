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
import ModeOfTraining from './ModeOfTraining';
import CareerSupport from './CareerSupport';
import Learners from './Learners';
import StickyBar from './StickyBar';
import CurriculumMain from './CurriculumMain';
import QaAutomationFaq from './QaAutomationFaq';

const QaAutomation = () => {
  return (
    <>
      <div className='course-top'>
        <Topbar />
        <NavbarTop />
        <div className='course-banner'>
          <h3 className='course-banner-content'>QA Automation</h3>
        </div>
        <QaTop />
        <KeyHighlights />
        
        {/* Add id attributes to the sections you want to scroll to */}
        <div id="upcoming-batch">
          <UpcomingHeader />
          <UpcomingBatch />
        </div>

        <div id="corporate">
          <Corporate />
        </div>

        <div id="curriculum">
          <CurriculumMain />
        </div>

        <div id="mode-of-training">
          <ModeOfTraining />
        </div>

        <div id="career-support">
          <CareerSupport />
        </div>

        <div id="learners">
          <Learners />
        </div>

        <div id="qa-faq">
          <QaAutomationFaq />
        </div>

        <Footer />
        <StickyBar />
      </div>
    </>
  );
}

export default QaAutomation;
