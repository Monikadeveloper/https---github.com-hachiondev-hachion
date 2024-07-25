import React from 'react'
import { SiMicrosoftteams } from "react-icons/si";
import { GiTeamIdea } from "react-icons/gi";

const InterviewPreparation = () => {
  return (
   <>
     <div className='career-content'>
    <h5 className='career-header-content'><SiMicrosoftteams/>  Mock Interview Preparation</h5>
    <p className='career-session'>Students will go through a number of mock interviews conducted by technical experts who will then offer tips and constructive feedback for reference and improvement.</p>
   <h5 className='career-header-content'><GiTeamIdea />  1 on 1 Career Mentoring Sessions</h5>
   <p className='career-session'>Attend one-on-one sessions with career mentors on how to develop the required skills and attitude to secure a dream job based on a learner’s 
    educational background, past experience, and future career aspirations.</p>
    </div>
   </>
  )
}

export default InterviewPreparation