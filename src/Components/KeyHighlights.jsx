import React from 'react'
import './Course.css'
import {LiaChalkboardTeacherSolid} from 'react-icons/lia';
import {BiVideoPlus} from 'react-icons/bi';
import { IoRocketOutline } from 'react-icons/io5';
import {VscBriefcase} from 'react-icons/vsc';
import { IoDocumentTextOutline } from 'react-icons/io5';
import {GrCertificate} from 'react-icons/gr';

const KeyHighlights = () => {
  return (
    <>
   <div className='key-highlights'>
   <p className='amount'>Key Highlights</p>
   <div className='key-highlights-header'>
    <div className='key-highlights-content'>
        <LiaChalkboardTeacherSolid className='key-icons'/>
        <p className='key-highlights-para'>30 Hours of Live online Training</p>
    </div>
    <div className='key-highlights-content'>
        <BiVideoPlus className='key-icons'/>
        <p className='key-highlights-para'>30 Hours of recorded videos</p>
    </div>
    <div className='key-highlights-content'>
        <IoRocketOutline  className='key-icons'/>
        <p className='key-highlights-para'>Live Projects & Exercises</p>
    </div>
    <div className='key-highlights-content'>
        <VscBriefcase  className='key-icons'/>
        <p className='key-highlights-para'>Job Assistance </p>
    </div>
    <div className='key-highlights-content'>
        <IoDocumentTextOutline className='key-icons'/>
        <p className='key-highlights-para'>Resume & Interview Assistance</p>
    </div>
    <div className='key-highlights-content'>
        <GrCertificate className='key-icons'/>
        <p className='key-highlights-para'>Certification</p>
    </div>

   </div>
   </div>
    </>
  )
}

export default KeyHighlights