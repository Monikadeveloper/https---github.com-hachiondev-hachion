import React from 'react'
import './Home.css'
import logo from '../Assets/logo.png'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import linkedin from '../Assets/linkedin.png';
import apple from '../Assets/Apple.png';
import {Link} from 'react-router-dom';
import LoginSide from './LoginSide';
import captcha from '../Assets/captcha.png';


 const Login = () => {
  return (
  <>
<div className='login'>
<div className='login-left'>
  <div className='login-top'>
  <img src={logo} alt='logo' className='login-logo'/>
  <h3 className='welcome-back'>Welcome  back!</h3>
  <h4>Login to continue learning</h4>
  </div>
  <div className='login-mid'>
  <label className='login-label'>Email ID</label>
  <div className="form-floating mb-3">
    
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<label className='login-label'>Password</label>
<div className="form-floating mb-3">
  
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<p className='forgot-password'>Forgot Password?</p>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    I'm not a robot
  </label>
  <img src={captcha} alt='captcha'/>
</div>
<div class="d-grid gap-2">
  
  <button class="btn btn-primary" type="button">Login</button>
</div>

<p className='login-option'>Or login with</p>
<div className='icon-holder'>
  <FcGoogle/>
  <FaFacebook style={{color:'#316FF6'}}/>
 <img src={linkedin} alt='linkedin'/>
<img src={apple} alt='apple'/>
</div>
<p className='go-to-register'>Don't have an account? <Link to='#' > Register </Link></p>
</div>
</div>
<LoginSide/>
</div>
  </>
  )
}
export default Login