import React from 'react'
import './Course.css';
import {RiDoubleQuotesL} from 'react-icons/ri';
import {RiDoubleQuotesR} from 'react-icons/ri';

const Corporate = () => {
  return (
    <>
    <div className='corporate'>
      <div className='corporate-content'>
     <p className='corporate-para'><RiDoubleQuotesL style={{paddingBottom:'5px'}}/>  Enhance Your Team's Skills Explore Our <span className='corporate-para-span'>  Corporate Training </span>Options  <RiDoubleQuotesR style={{paddingBottom:'7px'}}/></p>
    <button className='know-more'>Know More</button>
     </div>
    </div>
    </>
  )
}

export default Corporate