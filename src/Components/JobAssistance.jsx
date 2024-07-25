import React from 'react'
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { HiClipboardDocumentList } from "react-icons/hi2";

const JobAssistance = () => {
  return (
    <>
      <div className='career-content'>
     <h5 className='career-header-content'><LiaChalkboardTeacherSolid/>  Placement Assistance</h5>
    <p className='career-session'>Placement opportunities are provided once the learner is moved to the placement pool upon clearing Placement Readiness Test (PRT)</p>
   <h5 className='career-header-content'><HiClipboardDocumentList /> Exclusive access to Hachion Job portal</h5>
   <p className='career-session'>Exclusive access to our dedicated job portal and apply for jobs. More than 400 hiring partners’ including top start-ups and product companies hiring our learners. Mentored support on job search and relevant jobs for your career growth.</p>
   </div>
    </>
  )
}

export default JobAssistance