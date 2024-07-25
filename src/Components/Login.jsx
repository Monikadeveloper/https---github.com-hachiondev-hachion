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
import google from '../Assets/google_symbol.svg.png'
import facebook from '../Assets/facebook_symbol.svg.png'
import lock from '../Assets/Component 1.png'
import line from '../Assets/Vector 1.png'

 const Login = () => {
  return (
  <>
<div className='login'>
<div className='login-left'>
  <div className='login-top'>
  <img src={logo} alt='logo' className='login-logo'/>
  <h3 className='welcome-back'>Welcome  back!</h3>
  <h4 className='login-continue'>Login to continue learning</h4>
 
  <div className='login-mid'>
  <label className='login-label'>Email ID</label>
  <div className="form-floating mb-3">
    
  <input type="email" className="form-control" id="floatingInput" placeholder="abc@gmail.com"/>

  <label for="floatingInput">abc@gmail.com</label>
</div>
<label className='login-label'>Password</label>
<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Enter your password" />
  <img src={lock} alt='lock'/>
  <label for="floatingPassword">Enter your password</label>

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
</div>
<img src={line} alt='effect'/>
<p className='login-option'>Or login with</p>
<div className='icon-holder'>
 <img src={google} alt='google'/>
 <img src={facebook} alt='facebook'/>
 <img src={linkedin} alt='linkedin'/>
<img src={apple} alt='apple'/>
</div>
<p className='go-to-register'>Don't have an account? <Link to='/register' className='link-to' > Register </Link></p>
</div>
</div>
<LoginSide/>
</div>
  </>
  )
}
export default Login