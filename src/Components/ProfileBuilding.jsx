import React from 'react'
import { HiDocumentText } from "react-icons/hi2";
import { CiLinkedin } from "react-icons/ci";

const ProfileBuilding = () => {
  return (<>
    <div className='career-content'>
    <h5 className='career-header-content'><HiDocumentText/>  Career Oriented Sessions</h5>
    <p className='career-session'>Over 10+ live interactive sessions with an 
        industry expert to gain knowledge and experience on how to build skills 
        that are expected by hiring managers. These will be guided sessions that 
        will help you stay on track with your upskilling.</p>
   <h5 className='career-header-content'><CiLinkedin />  Resume & LinkedIn Profile Building</h5>
   <p className='career-session'>Get assistance in creating a world-class resume
     & Linkedin Profile from our career services team and learn how to grab the 
     attention of the hiring manager 
    at the profile shortlisting stage</p>
    </div>
    </>
  )
}

export default ProfileBuilding