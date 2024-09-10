import React, { useState } from 'react';
import './Login.css';
import logo from '../../Assets/logo.png';
import linkedin from '../../Assets/linkedin.png';
import apple from '../../Assets/Apple.png';
import { Link } from 'react-router-dom';
import LoginSide from './LoginSide';
import captcha from '../../Assets/captcha.png';
import google from '../../Assets/google_symbol.svg.png';
import facebook from '../../Assets/facebook_symbol.svg.png';
import lock from '../../Assets/Component 1.png';
import { useFormik } from 'formik';
import { LoginSchema } from '../Schemas';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: "",
  password: ""
};

const Login = () => {
  const [passwordType, setPasswordType] = useState('password');
  const navigate = useNavigate();

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      navigate('/login');
      console.log(values);
    }
  });
  const handleLogin = () => {
   
    navigate('/'); 
  };
const googleLogin=()=>{
  console.log('google login clicked');
}
  const togglePasswordVisibility = () => {
    setPasswordType(prevType => prevType === 'password' ? 'text' : 'password');
  };

  return (
    <>
      <div className='login'>
        <div className='login-left'>
          <div className='login-top'>
            <img src={logo} alt='logo' className='login-logo' />
            <h3 className='welcome-back'>Welcome back!</h3>
            <h4 className='login-continue'>Login to continue learning</h4>

            <div className='login-mid'>
              <form onSubmit={handleSubmit}>
                <label className='login-label'>Email ID<span className='star'>*</span></label>
                <div className="input-group mb-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="abc@gmail.com"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                 
                </div>
                {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
                <label className='login-label'>Password<span className='star'>*</span></label>
                <div className="input-group mb-2">
                  <input
                    type={passwordType}
                    className="form-control"
                    placeholder="Enter your password"
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="input-group-text" onClick={togglePasswordVisibility}>
                    <img src={lock} alt='lock' />
                  </span>
                </div>
                {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null}

                <Link to='/forgotpassword' style={{ textDecoration: 'none' }}>
                  <p className='forgot-password'>Forgot Password?</p>
                </Link>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I'm not a robot
                  </label>
                  <img src={captcha} alt='captcha' style={{ marginLeft: '4vh', cursor: 'pointer' }} />
                </div>

                <div className="d-grid gap-2">
                  <button className="register-btn" type="submit" onClick={handleLogin}>Login</button>
                </div>
              </form>
            </div>

            <div className='login-with'>
              <hr width='30%' size='2' style={{ marginTop: '3vh' }}></hr>
              <p className='login-option'>Or Login with</p>
              <hr width='30%' size='2' style={{ marginTop: '3vh' }}></hr>
            </div>

            <div className='icon-holder'>
              <img src={google} alt='google' onClick={googleLogin} />
              <img src={facebook} alt='facebook' />
              <img src={linkedin} alt='linkedin' style={{ height: '50px', width: '50px' }} />
              <img src={apple} alt='apple' />
            </div>

            <p className='go-to-register'>Don't have an account? <Link to='/register' className='link-to-register'> Register </Link></p>
          </div>
        </div>
        <LoginSide />
      </div>
    </>
  );
}

export default Login;