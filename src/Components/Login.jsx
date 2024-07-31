import React from 'react'
import './Home.css'
import logo from '../Assets/logo.png'
import linkedin from '../Assets/linkedin.png';
import apple from '../Assets/Apple.png';
import {Link} from 'react-router-dom';
import LoginSide from './LoginSide';
import captcha from '../Assets/captcha.png';
import google from '../Assets/google_symbol.svg.png'
import facebook from '../Assets/facebook_symbol.svg.png'
import lock from '../Assets/Component 1.png'
import {useFormik} from 'formik';
import {LoginSchema} from './Schemas'

const initialValues={
  email:"",
  password:""
}

 const Login = () => {
   const {values,errors,handleBlur,touched,handleChange,handleSubmit}= useFormik({
    initialValues:initialValues,
    validationSchema:LoginSchema,
    onSubmit:(values)=>{
   console.log(values);
    }
   })

  return (
  <>
<div className='login'>
<div className='login-left'>
  <div className='login-top'>
  <img src={logo} alt='logo' className='login-logo'/>
  <h3 className='welcome-back'>Welcome  back!</h3>
  <h4 className='login-continue'>Login to continue learning</h4>
 
  <div className='login-mid'>
    <form onSubmit={handleSubmit}>
  <label className='login-label'>Email ID<span className='star'>*</span></label>
  <div className="form-floating mb-3">
    
  <input type="email" className="form-control" id="floatingInput" placeholder="abc@gmail.com" 
  name='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
{errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>):null}
  <label for="floatingInput" className='floatingInputLabel'>abc@gmail.com</label>
</div>
<label className='login-label'>Password<span className='star'>*</span></label>
<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Enter your password"
   name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
    <img src={lock} alt='lock'/>
   {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>):null}
   
 
  <label for="floatingPassword" className='floatingInputLabel'>Enter your password</label>

</div>
<p className='forgot-password'>Forgot Password?</p>
<div class="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    I'm not a robot
  </label>
  <img src={captcha} alt='captcha'/>
</div>
<div class="d-grid gap-2">
  
  <button class="register-btn" type="submit">Login</button>
 </div>

</form>
</div>

<div className='login-with'>
<hr width='30%' size='2' style={{marginTop:'3vh'}}></hr>
<p className='login-option'>Or Login with</p>
<hr width='30%' size='2'style={{marginTop:'3vh'}}></hr>
</div>
<div className='icon-holder'>
 <img src={google} alt='google'/>
 <img src={facebook} alt='facebook'/>
 <img src={linkedin} alt='linkedin'/>
<img src={apple} alt='apple'/>
</div>
<p className='go-to-register'>Don't have an account? <Link to='/register' className='link-to-register' > Register </Link></p>
</div>
</div>
<LoginSide/>
</div>
  </>
  )
}
export default Login