import React from 'react'
import Curriculum from './Curriculum';

const topics1 = [
  'Introduction',
  'Selenium IDE',
  'Java',
  'WebDriver Introduction',
  'Add on and Methods'
];
 const topics2=[
  'Profiles',
  'Automating Links',
  'Automating Dropdowns',
  'Xpaths'
 ]


const CurriculumMain = () => {
  return (
    <>
    <div>
      <Curriculum 
        heading="Curriculum"
        topics={topics1}
        buttonText="Download Curriculum"
        additionalTopics={topics2}
      />
   
    </div>
    
    </>
  )
}

export default CurriculumMain
