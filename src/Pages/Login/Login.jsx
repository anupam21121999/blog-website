import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='login'>
    <div className='logintitle' style={{color:"tomato",fontSize:"25px"}}>Login</div>
        <form className='loginform'>
            <label className='logintitle' style={{marginLeft:"20px"}}>E-Mail</label>
            <input type="email" className='logininput' placeholder="Enter Your E-Mail" />
            <label className='logintitle' style={{marginLeft:"20px"}}>Password</label>
            <input type="password" className='logininput' placeholder="Enter Your Password" />
            <button className='loginbtn'>Register</button>
        </form>
        <img className='loginimg' src='/images/login.jpg' alt='dark' />
    </div>
  )
}

export default Login