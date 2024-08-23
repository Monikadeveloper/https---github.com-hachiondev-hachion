import React from 'react'
import logo from '../Assets/logo.png';
import LoginSide from './LoginSide';
import success  from '../Assets/success.gif';
import {useNavigate} from 'react-router-dom'
import './Home.css'
import {RiCloseCircleLine} from 'react-icons/ri'



const ForgotPassword = () => {
    const navigate=useNavigate();
    const handleLogin=()=>{
   navigate('/login');
    }
  return (
    <>
    <div className='login'>
<div className='login-left'>
  <div className='login-top'>
  <img src={logo} alt='logo' className='login-logo'/>
  <h3 className='recover'>Recover your password</h3>
  
 
  <div className='login-mid'>

  <label className='login-label'>Email ID<span className='star'>*</span></label>
  <div className="form-floating mb-3">
    
  <input type="email" className="form-control" id="floatingInput" placeholder="abc@gmail.com" />
  <label for="floatingEmail" className='floatingInputLabel'>abc@gmail.com</label>
</div>

<div class="d-flex">
  <button type="button" className="register-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Send
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
    
        <button data-bs-dismiss="modal" className='close-btn' aria-label="Close"><RiCloseCircleLine/></button>
       
      <div class="modal-body">
      <img src={success} alt="Success" className="success-gif"/>
    <p className='modal-para' >Password send to your Email</p>
      </div>
      
      
        <button type="button" className="btn-login" onClick={handleLogin}>Login</button>
      
    
    </div>
  </div>
</div>
 </div>


</div>
</div>
</div>
<LoginSide/>
</div>
    </>
  )
}

export default ForgotPassword