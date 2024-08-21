import React from 'react';
import BatchType from './BatchType';
import './Course.css';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { IoRocketOutline } from 'react-icons/io5';
import { RiFolderDownloadLine } from 'react-icons/ri';
import { FaRegFileAlt } from 'react-icons/fa';
import { FaFileArrowDown } from 'react-icons/fa6';
import { RiPresentationLine } from 'react-icons/ri';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { FcCustomerSupport } from 'react-icons/fc';
import { RiVideoDownloadLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa6';


const ModeOfTraining = () => {
  return (
<>
<div className='mode-of-training'>
    <h1 className='qa-heading'>Mode of Training's</h1>
    <div className='mode-of-training-head'>
    <BatchType/>
    <p className='live-mode'>LIVE Mode Training refers to real time, interactive training sessions where students participate in live classes led by an instructor. This method allows for immediate feedback, active participation, and dynamic interaction with both the trainer and peers, creating an engaging learning experience.</p>
<p className='live-head'>Target Audience:</p>
<p className='live-mode'>Interactive Learners, Immediate Feedback Seekers, Structured Learners, Collaborative Learners, Beginner Level Students, Motivational Learners, Time Bound Learners.</p>
<p className='live-head'>Features :</p>
<div className='live-mode-feature'>
<div className='mode-feature'>
<div className='feature-icons'>
<LiaChalkboardTeacherSolid className='features-icon'/>
  <p className='feature-content'>Live interactive training sessions</p>
</div>
<div className='feature-icons'>
<IoRocketOutline className='features-icon'/>
<p className='feature-content'>Daily Assignments and Lab exercises</p>
</div>
<div className='feature-icons'>
<RiFolderDownloadLine className='features-icon'/>
<p className='feature-content'>Downloadable interview questions and documents</p>
</div>
<div className='feature-icons'>
<FaRegFileAlt className='features-icon'/>
<p className='feature-content'>Course materials and white papers (optional)</p>
</div>
<div className='feature-icons'>
    <FaFileArrowDown className='features-icon'/>
    <p className='feature-content'>Downloadable sample resumes</p>
</div>
</div>
<div className='mode-feature'>
<div className='feature-icons'>
<RiPresentationLine className='features-icon'/>
  <p className='feature-content'>Special attention for students from non-IT backgrounds</p>
</div>
<div className='feature-icons'>
<FaRegCircleQuestion className='features-icon'/>
<p className='feature-content'>Separate sessions for doubt clarification</p>
</div>
<div className='feature-icons'>
<FcCustomerSupport className='features-icon'/>
<p className='feature-content'>Trainer support via email and Whatsapp</p>
</div>
<div className='feature-icons'>
<RiVideoDownloadLine className='features-icon'/>
<p className='feature-content'>Downloadable recorded videos after every session</p>
</div>
<div className='feature-icons'>
    <FaWhatsapp className='features-icon'/>
    <p className='feature-content'>Whatsapp group with 24/7 support team</p>
</div>
</div>
</div>

    </div>
</div>
</>
  )
}

export default ModeOfTraining
