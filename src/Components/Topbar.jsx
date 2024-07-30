import React from 'react'
import { PiLineVerticalThin } from "react-icons/pi";
import { IoMailSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import './Home.css';

const Topbar = () => {
  return (
   <>
<div className='topbar'>
    <div className='topbar-left'>
<div className='query'>
    <p className='query-content'>Have any query ?</p>
    </div>
    <div className='whatsapp'>
        <FaWhatsapp style={{backgroundColor:'#25D366',fontSize:'1.6rem'}}/>
        <p className='whatsapp-number'> +91 9490323388</p>
        <PiLineVerticalThin style={{color:'white',fontSize:'2rem'}}/>
    </div>
    <div className='training-mail'>
     <IoMailSharp style={{Color:'white',fontSize:'2rem',marginRight:'1vh'}}/>
     <p className='training-email'>trainings@hachion.co</p>
    </div>
    </div>
    <div className='login-div'>
        <p className='login-div-content'>Login</p>
        <PiLineVerticalThin style={{color:'white',fontSize:'2rem'}}/>
        <p className='login-div-content'>Register</p>
    </div>

</div>
   </>
  )
}

export default Topbar
