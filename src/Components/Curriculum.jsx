import React from 'react';
import './Course.css';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa6';

const Curriculum = ({ heading, topics, buttonText }) => {
  return (
    <>
      <div className='curriculum'>
        <div className='curriculum-head'>
          <h1 className='qa-heading'>{heading}</h1>
          <button className='btn-curriculum'>
            <BsFileEarmarkPdfFill style={{ height: '40px', width: '30px', color: 'red' }} /> {buttonText}
          </button>
        </div>
        <div className='curriculum-topic'>
          {topics.map((topic, index) => (
            <div className='curriculum-content' key={index}>
              <p>{topic}</p>
              <p><FaPlus style={{ color: '#006489' }} /></p>
            </div>
          ))}
        </div>
        <div className='view-div'>
          <button className='view-more-btn'>View More</button>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
