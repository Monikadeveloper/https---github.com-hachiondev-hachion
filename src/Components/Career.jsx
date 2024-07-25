import React, { useState } from 'react'
import './Home.css';
import career from '../Assets/international-job-placement-consultancy-500x500.jpg';
import InterviewPreparation from './InterviewPreparation';
import ProfileBuilding from './ProfileBuilding';
import JobAssistance from './JobAssistance';

const Career = () => {
   const [profile,setProfile]=useState(false);
   const [interview,setInterview]=useState(false);
    
  return (
   <>
   <div className='career'>
    <h1 className='career-header'>Career  Guidance  In  Hachion</h1>
    <div className='career-display'>
   <img src={career} alt='career-image' className='career-img'/>
   <div className='career-profile'>
   <div className='profile-header'>
   <h4 className='profile-header-list' onClick={()=>setProfile(true)} >Profile Building</h4>
   <h4 className='profile-header-list'onClick={()=>setInterview(true)}>Interview Preparation</h4>
   <h4 className='profile-header-list' onClick={()=>setInterview(false)}>Job Assistance</h4>
   </div>
{profile?
<ProfileBuilding/>:(interview? <InterviewPreparation/>:<JobAssistance/>)

}
   </div>
   </div>
   </div>
   </>
  )
}

export default Career