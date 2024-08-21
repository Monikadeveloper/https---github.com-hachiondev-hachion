import React from 'react';
import './Course.css';
import { FaCircle } from "react-icons/fa";
import {FcCalendar} from 'react-icons/fc';
import BatchType from './BatchType';

const UpcomingBatch = () => {
  return (
   <>
   <div className='upcoming-batch'>
   <p className='upcoming-batch-heading'>Upcoming Batches for QA Automation Course</p>
 <BatchType/>
   <div className='batch-schedule'>
    <div className='left'>
        <div className='partition'>
            <label>
            <input type='radio' name='radio'/>
            <span className='custom-radio'></span>
            <p className='batch-date'> Aug 8 2024<span className='date-span'>(Thursday)</span></p>
           <p className='batch-date'>09:00 PM IST <span className='date-span'>(1 hour)</span></p>
           <p className='demo'><FaCircle style={{marginRight:'1vh',height:'20px',width:'20px'}}/>Live Demo</p>
            </label>

        </div>
        <div className='separator'></div>
        <div className='partition'> <label>
            <input type='radio' name='radio'/>
            <span className='custom-radio'></span>
            <p className='batch-date'> Aug 13 2024<span className='date-span'>(Thursday)</span></p>
           <p className='batch-date'>08:00 PM IST <span className='date-span'>(1 hour)</span></p>
           <p className='demo'><FaCircle style={{marginRight:'1vh',height:'20px',width:'20px'}}/>Live Demo</p>
            </label></div>
        <div className='separator'></div>
        <div className='partition'> <label>
            <input type='radio' name='radio'/>
            <span className='custom-radio'></span>
            <p className='batch-date'> Aug 20 2024<span className='date-span'>(Thursday)</span></p>
           <p className='batch-date'>10:00 PM IST <span className='date-span'>(1 hour)</span></p>
           <p className='demo'><FaCircle style={{marginRight:'1vh',height:'20px',width:'20px'}}/>Live Demo</p>
            </label></div>
    </div>
    <div className='separator'></div>
    <div className='right'>
        <p className='batch-date'>Fee : </p>
        <p className='free'>Free</p>
        <button className='enroll-now'>Enroll Now </button>
    </div>
    
   </div>
   <p className='schedule'><FcCalendar/>Schedule your way?<span className='schedule-span'> Request Batch </span></p>
   </div>
   
   </>
  )
}

export default UpcomingBatch
