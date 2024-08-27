import React from 'react'
import Curriculum from './Curriculum';

const topics1 = [
  'Introduction',
  'Selenium IDE',
  'Java',
  'WebDriver Introduction',
  'Add on and Methods'
];



const CurriculumMain = () => {
  return (
    <>
    <div>
      <Curriculum 
        heading="Curriculum"
        topics={topics1}
        buttonText="Download Curriculum"
      />
   
    </div>
    
    </>
  )
}

export default CurriculumMain
