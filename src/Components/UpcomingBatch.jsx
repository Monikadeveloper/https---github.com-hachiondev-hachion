import React, { useState } from 'react';
import { FcCalendar } from 'react-icons/fc';
import './Course.css';
import LiveOnlineFees from './LiveOnlineFees';
import CorporateFees from './CorporateFees';
import MentoringModeFees from './MentoringModeFees';
import SelfPlacedFees from './SelfPlacedFees';
import RequestBatch from './RequestBatch'; // Import the RequestBatch component

const UpcomingBatch = () => {
  const [activeComponent, setActiveComponent] = useState('LiveOnlineFees');
  const [showModal, setShowModal] = useState(false); // State to control the modal

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
          <span className='schedule-span' onClick={() => setShowModal(true)}> Request Batch </span>
        </p>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="btn-close" onClick={() => setShowModal(false)}>X</button>
            <RequestBatch />
          </div>
        </div>
      )}
    </>
  );
};

export default UpcomingBatch;
