import React from 'react';
import './Course.css';
import {BsFileEarmarkPdfFill} from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa6';

const Curriculum = () => {
  return (
   <>
   <div className='curriculum'>
    <div className='curriculum-head'>
        <h1 className='qa-heading'>Curriculum</h1>
        <button className='btn-curriculum'><BsFileEarmarkPdfFill style={{height:'40px',width:'30px',color:'red'}}/> Download Curriculum</button>
    </div>
    <div className='curriculum-topic'>
<div className='curriculum-content'>
    <p>Introduction</p>
    <p><FaPlus style={{color:'#006489'}}/></p>
</div>
<div className='curriculum-content'>
    <p>Selenium IDE</p>
    <p><FaPlus style={{color:'#006489'}}/></p>
</div>
<div className='curriculum-content'>
    <p>Java</p>
    <p><FaPlus style={{color:'#006489'}}/></p>
</div>
<div className='curriculum-content'>
    <p>WebDriver Introduction</p>
    <p><FaPlus style={{color:'#006489'}}/></p>
</div>
<div className='curriculum-content'>
    <p>Add on and Methods</p>
    <p><FaPlus style={{color:'#006489'}}/></p>
</div>
</div>
<div className='view-div'>
<button className='view-more-btn'>View More</button>
</div>
   </div>
   </>
  )
}

export default Curriculum
