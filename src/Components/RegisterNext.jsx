import React from 'react'
import './Home.css'
import logo from '../Assets/logo.png'
import {useFormik} from 'formik';
import {LoginSchema} from './Schemas'
import LoginSide from './LoginSide'
import lock from '../Assets/Component 1.png'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom' 

const initialValues={
  password:"",
  confirm_password:""
}
 const RegisterNext = () => {
  const navigate=useNavigate();

  const handleClick=()=>{
      navigate('/loginsuccess')
  }
  
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
  <h3 className='register-learning'>Register to start learning</h3>

<div className='steps'>
    <h4 className='steps-head'>Steps: </h4>
    <div className='step-one'>
      <h6 className='steps-head-one'>1</h6>
</div>
<hr width='45%' size='1' color='#00AAEF'/>
<div className='step-one'>
  <h6 className='steps-head-one'>2</h6>
</div>
</div>
<div className='otp-verify'>
<h6 className='enter-otp'>Enter OTP: </h6>
<div className='otp'>
<input className='otp-number' type='number'/>
<input className='otp-number' type='number'/>
<input className='otp-number' type='number'/>
<input className='otp-number' type='number'/>
</div>
<p className='forgot-password'>Resend OTP</p>
</div>
<form onSubmit={handleSubmit}>
<div className='login-mid'>
<label className='login-label'>Password<span className='star'>*</span></label>
<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Enter your password"
   name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
   <img src={lock} alt='lock'/>
  {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>):null}
  
<label for="floatingPassword" className='floatingInputLabel'>Enter your password</label>

</div>
<label className='login-label'>Confirm Password<span className='star'>*</span></label>
<div className="form-floating mb-3">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Enter your password"
 name='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} />
 <img src={lock} alt='lock'/>
{errors.confirm_password && touched.confirm_password ? (<p className='form-error'>{errors.confirm_password}</p>):null}

   
  <label for="floatingPassword" className='floatingInputLabel'>Please confirm password</label>
  </div>
</div>
<button className='register-btn' onclick={handleClick}>Register</button>
</form>
<p className='login-with-hachion'>Do you have an account with Hachion? <Link to='/login' className='link-to'>Click here to Login</Link></p>
</div>
</div>
<LoginSide/>
</div>
  </>
  )
}
export default RegisterNext;