import React from 'react'
import Topbar from './Topbar'
import NavbarTop from './NavbarTop'
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import './Blogs.css';
import facebook from '../../Assets/facebook.png';
import twitter from '../../Assets/twitter.png';
import linkedin from '../../Assets/linkedin (1).png';
import salesforce from '../../Assets/salesforce.png';

const SalesforceBlog = () => {
  return (
    <>
    <Topbar/>
    <NavbarTop/>
    <div className='salesforce-blog'>
    <div className='salesforce-blog-left'>
 <h3>Recommended Publications</h3>
 <p>Salesforce admin interview FAQ's</p>
 <p>Salesforce Developer interview FAQ's</p>
    </div>
<div className='salesforce-blog-right'>
    <div className='salesforce-right'>
<button className='btn-curriculum'>
          <BsFileEarmarkPdfFill style={{ height: '40px', width: '30px', color: 'red' }} />Download
        </button>
        <p>Share :</p>
        <img src={facebook} alt='facebook' />
        <img src={twitter} alt='twitter'/>
        <img src={linkedin} alt='linkedin'/>
        </div>
        <div className='salesforce-middle'>
            <img src={salesforce} alt='salesforce'/>
            <div>
            <h1>7 Reasons to Learn Salesforce in 2023 By</h1>
            </div>
        </div>

</div>

    </div>
    
    </>
  )
}

export default SalesforceBlog
