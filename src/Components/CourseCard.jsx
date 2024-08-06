import React from 'react'
import { RxCalendar } from "react-icons/rx";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineStar } from "react-icons/md";
import cardbackground from '../Assets/course2.png';

const CourseCard = (props) => {
  return (
<>
<div className="card" >
 <div className='card-header-div'>
 <img src={cardbackground} alt="Card" className="card-image" />
 {/* <div className='card-img-div'>
 </div>  */}
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

export default CourseCard
