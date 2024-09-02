import React, { useState } from 'react';
import { FcCalendar } from 'react-icons/fc';
import './Course.css';
import LiveOnlineFees from './LiveOnlineFees';
import CorporateFees from './CorporateFees';
import MentoringModeFees from './MentoringModeFees';
import SelfPlacedFees from './SelfPlacedFees';

const UpcomingBatch = () => {
  const [activeComponent, setActiveComponent] = useState('LiveOnlineFees');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'LiveOnlineFees':
        return <LiveOnlineFees />;
      case 'CorporateFees':
        return <CorporateFees />;
      case 'MentoringModeFees':
        return <MentoringModeFees />;
      case 'SelfPlacedFees':
        return <SelfPlacedFees />;
      default:
        return <LiveOnlineFees />;
    }
  };

  return (
    <>
      <div className='upcoming-batch'>
        <p className='qa-heading'>Upcoming Batches for QA Automation Course</p>
        <div className='batch-type'>
 <p className='batch-type-content' onClick={() => setActiveComponent('LiveOnlineFees')}>Live online training</p>
 <p className='batch-type-content' onClick={() => setActiveComponent('MentoringModeFees')}>Mentoring mode</p>
 <p className='batch-type-content'onClick={() => setActiveComponent('SelfPlacedFees')}>Self-placed Learning</p>
 <p className='batch-type-content' onClick={() => setActiveComponent('CorporateFees')}>Corporate Training</p>
   </div>
      
        {renderComponent()}

        <p className='schedule'>
          <FcCalendar />
          Schedule your way? 
          <span className='schedule-span'> Request Batch </span>
        </p>

       
        {/* <div className='button-group'>
          <button onClick={() => setActiveComponent('LiveOnlineFees')}>Live Online</button>
          <button onClick={() => setActiveComponent('CorporateFees')}>Corporate</button>
          <button onClick={() => setActiveComponent('MentoringModeFees')}>Mentoring</button>
          <button onClick={() => setActiveComponent('SelfPlacedFees')}>Self-Placed</button>
        </div> */}
      </div>
    </>
  );
};

export default UpcomingBatch;
