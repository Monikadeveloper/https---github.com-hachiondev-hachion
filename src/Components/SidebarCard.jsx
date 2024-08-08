import React from 'react'
import { RxCalendar } from "react-icons/rx";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineStar } from "react-icons/md";

const SidebarCard = () => {
  return (
    <>
    <div className="card" >
     <div className='card-header-div'>
     <h4 className='side-'>Certified Students:0</h4>
  
     <img src={props.image} alt='card-img' className='card-icon'/>  
        </div>
     
     <div className='course-details'>
     <h5 className='course-name'>{props.heading}</h5>
    <div className='course-time'>
        <h6 className='course-month' ><RxCalendar/>   {props.month}</h6>
        <h6 className='course-month'><BiTimeFive/>   {props.time} </h6>
    
    </div>
    <h6 className='course-review'>Rating: < MdOutlineStar className='star-icon'/> 
    < MdOutlineStar className='star-icon'/>< MdOutlineStar className='star-icon'/>
    < MdOutlineStar className='star-icon'/>< MdOutlineStar className='star-icon'/> 100(5.0) </h6>
    <button className='enroll-btn'>View Details</button>
     </div>
    </div>
    </>
  )
}

export default SidebarCard