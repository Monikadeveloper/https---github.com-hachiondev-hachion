import React from 'react'
import { PiLineVerticalThin } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import whatsapp from '../../Assets/logos_whatsapp-icon.png';
import './Home.css';
import {Link} from 'react-router-dom';

const Topbar = () => {
  return (
   <>
<div className='topbar'>
    <div className='topbar-left'>
{/* <div className='query'> */}
    <p className='query-content'>Have any query ?</p>
    {/* </div> */}
    <div className='whatsapp'>
        <img src={whatsapp} alt='whatsapp-icon' style={{height:'30px',width:'30px'}}/>
        <p className='whatsapp-number'> +91 9490323388</p>
        <PiLineVerticalThin style={{color:'white',fontSize:'2rem'}}/>
    </div>
    <div className='training-mail'>
     <IoIosMail style={{Color:'white',fontSize:'2rem',marginRight:'1vh'}}/>
     <p className='training-email'>trainings@hachion.co</p>
    </div>
    </div>
    <div className='login-div'>
        <Link to='/login' className='login-link-home'>
        <button className='login-div-content'>Login</button></Link>
        <PiLineVerticalThin style={{color:'white',fontSize:'2rem'}}/>
       <Link to='/register' className='login-link-home'> <button className='login-div-content'>Register</button></Link>
    </div>

</div>
   </>
  )
}

export default Topbar
