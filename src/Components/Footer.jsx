import React from 'react'
import facebook from '../Assets/facebook_symbol.svg.png';
import twitter from '../Assets/twitter.png';
import youtube from '../Assets/youtube.png';
import linkedin from '../Assets/linkedin.png';
import instagram from '../Assets/instagram.png';
import dribble from '../Assets/dribbble.png';

const Footer = () => {
  return (
    
    <div className='footer'>
      <div className='footer-top'>
    <div className='footer-head'>
    <p className='footer-heading'>Top Courses</p>
    <p className='footer-content'>AWS SysOps Admin</p>
    <p className='footer-content'>DevOps</p>
    <p className='footer-content'>Python</p>
    <p className='footer-content'>Salesforce Admin</p>
    <p className='footer-content'>More...</p>
</div>
<div className='footer-head'>
    <p className='footer-heading'>Popular Courses</p>
    <p className='footer-content'>Google Cloud</p>
    <p className='footer-content'>Tableau</p>
    <p className='footer-content'>Salesforce Developer</p>
    <p className='footer-content'>Java Full Stack Development</p>
    <p className='footer-content'>More...</p>
</div>
    
<div className='footer-head'>
    <p className='footer-heading'>Training Categories</p>
    <p className='footer-content'>Cloud Computing</p>
    <p className='footer-content'>RPA</p>
    <p className='footer-content'>Big Data</p>
    <p className='footer-content'>QA Testing</p>
    <p className='footer-content'>More...</p>
    </div>
    <div className='footer-head'>
    <p className='footer-heading'>Hachion</p>
    <p className='footer-content'>About us</p>
    <p className='footer-content'>Contact us</p>
    <p className='footer-content'>Careers</p>
    <p className='footer-content'>Blog</p>
    <p className='footer-content'>Internship</p>
    <p className='footer-content'>Sitemap</p>
    </div>
      </div>
      <hr width='95%' size='2' color='white' style={{marginLeft:'2vh'}}/>
      <div className='footer-bottom'>
      <p className='footer-copyright'>© Hachion 2024. All Rights Reserved.</p>
      <div className='footer-link'>
      <img src={facebook} alt='facebook'/>
      <img src={twitter} alt='twitter'/>
      <img src={linkedin} alt='linkedin'/>
      <img src={instagram} alt='instagram'/>
      <img src={dribble} alt='dribble'/>
      <img src={youtube} alt='youtube'/>

      
      </div>
      </div>
    </div>
  )
}

export default Footer
