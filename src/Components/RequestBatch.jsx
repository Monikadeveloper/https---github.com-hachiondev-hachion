import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendar from '../Assets/calendar.png'; // Black calendar icon
import './Course.css';

const RequestBatch = ({ closeModal }) => {
  const [startDate, setStartDate] = useState(null); 
  const [time, setTime] = useState(''); // State for time
  const timeInputRef = useRef(null); // Ref for time input

  // Function to trigger time input focus on clock image click (If you decide to keep the clock icon)
  const handleClockClick = () => {
    if (timeInputRef.current) {
      timeInputRef.current.focus();
    }
  };

  return (
    <>
      <div className='request-batch'>
        <div className='request-header'>
          Let us know your preferred start date
        </div>
        <form>
          <button 
            type="button" 
            className="btn-close" 
            aria-label="Close" 
            onClick={closeModal} // Close modal on click
            style={{
              background: 'transparent', 
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            &times;
          </button>

          <div className="form-group col-10">
            <label htmlFor="inputDate" className="form-label">Preferred batch start date</label>
            <div className="date-picker-wrapper">
              <DatePicker 
                selected={startDate} 
                onChange={(date) => setStartDate(date)} 
                dateFormat="dd/MM/yyyy" 
                placeholderText="DD/MM/YYYY"
                className="form-control" 
              />
              <img 
                src={calendar} 
                alt='calendar' 
                className="icon-right black-calendar" 
                onClick={() => document.querySelector('.react-datepicker__input-container input').focus()} 
              /> 
            </div>
          </div>

          <div className="form-group col-10" style={{ position: 'relative' }}>
            <label htmlFor="inputTime" className="form-label">Preferred batch Time</label>
            <input
              type="time"
              ref={timeInputRef}  // Assign the ref to time input
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="form-control"
              style={{
                border: "1px solid #B3B3B3",
                color: '#173767',
                paddingLeft: '10px', // Adjusted padding now that the clock image is removed
              }}
            />
          </div>

          <div className="form-group col-10">
            <label htmlFor="inputEmail" className="form-label">Email ID</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="abc@gmail.com"/>
          </div>
          
          <label htmlFor="inputNumber" className="form-label">Mobile Number</label>
          <div className="form-group col-10 mobile-number-container">
            <select className="form-select">
              <option>+1</option>
              <option>+91</option>
              <option>+44</option>
            </select>
            <input type="number" className="form-control" id="inputNumber" placeholder="Enter your number"/>
          </div>

          <button className="btn btn-primary btn-submit" type="button">Submit Request</button>
        </form>
      </div>
    </>
  );
}

export default RequestBatch;