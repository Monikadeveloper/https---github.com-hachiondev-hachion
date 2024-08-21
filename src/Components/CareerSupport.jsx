import React from 'react';
import './Course.css';
import icon from '../Assets/image 130.png'
import icon2 from '../Assets/image 131.png';

const CareerSupport=()=>{
return(<>
<div className='career-support'>
<h1 className='career-support-head'> Career Support </h1>
<div className='batch-type'>
 <p className='batch-type-content'>Profile Building</p>
 <p className='batch-type-content'>Interview Preparation</p>
 <p className='batch-type-content'>Job Assistance</p>
   </div>
   <div className='career-support-content'>
    <img src={icon} alt='icon-image'/>
    <div>
    <p>Career Oriented Sessions :</p>
    <p> Over 10+ live interactive sessions with an industry expert to gain knowledge and experience on how to build skills that are expected by hiring managers. These will be guided sessions that will help you stay on track with your upskilling.</p>
   </div>
   </div>
   {/* <div className='career-support-content'>
    <img src={icon2} alt='icon-image'/>
    <div>
    <p>Resume & Linkedin Profile Building :</p>
    <p>Get assistance in creating a world-class resume & Linkedin Profile from our career services team and learn how to grab the attention of the hiring manager at the profile shortlisting stage.</p>
   </div>
   </div> */}
</div>
</>)
}

export default CareerSupport;
