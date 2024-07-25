import React from 'react'
import LoginSide from './LoginSide'
import logo from '../Assets/logo.png';
import './Home.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

const Register = () => {
  return (
<>
<div className='login'>
<div className='login-left'>
<div className='login-top'>
  <img src={logo} alt='logo' className='login-logo'/>
  <h3 className='register-head'>Register to start learning</h3>
  <h4>Tap on any option to create an account</h4>
  <div className='icon-places'>
    <div className='icon-text'>
  
   <div></div>
    </div>
  </div>
  </div>
  <div className='login-mid'>
  </div>
<LoginSide/>
</div>
  
   </>
  )
}

export default Register