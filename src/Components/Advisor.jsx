import React from 'react';
import './Corporate.css';


const Advisor = () => {
  return (
   <>
   <div className='advisor'>
<div className='advisor-form'>
    <div className='advisor-head'>
        <p>Talk to our Advisor</p>
    </div>
    <form>
    <div className="input-container">
    <label className="input-label" for="fullName">Full Name *</label>
    <input type="text" id="fullName" className="input-field" placeholder="Enter your full name"/>
</div>
 <div className="input-container">
    <label className="input-label" for="fullName">Company Name *</label>
    <input type="text" id="fullName" className="input-field" placeholder="Enter your company name"/>
</div>

    </form>
    </div>

   </div>

   
   </>
  )
}

export default Advisor