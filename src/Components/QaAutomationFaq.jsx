import React from 'react'
import Curriculum from './Curriculum';

const topics2 = [
    'What is Selenium 1.0 and Selenium 2.0?',
    'Why do we need webdriver when we have IDE available?',
    'What all browsers are supported by Webdriver?',
    'Is it true that if an object is identified using XPath then, my tests can break if I execute them on a separate browser?',
    'Can we program webdriver in any other language than Java?'
  ];
const QaAutomationFaq = () => {
  return (
   <>
   <div>
   <Curriculum 
        heading="QA Automation FAQ's"
        topics={topics2}
        buttonText="Download FAQ's"
      />

   </div>

   </>
  )
}

export default QaAutomationFaq