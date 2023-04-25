import React from 'react'
import './setting.css'
import Sidebar from '../../Sidebar/Sidebar'
const Setting = () => {
  return (
    <div className='setting'>
        <div className='settingwrapper'>
            <div className='settingtitle'>
                <span className='settingupdatetitle'>Update Your Account</span>
                <span className='settingdeletetitle'>Delete Account</span>
            </div>
            <form className='settingform'>
                <label>Profile Picture</label>
                <div className='settingpp'>
                    <img className='settingimg' src='/images/setting.jpg' alt='dark' />
                    <label htmlFor='fileInput'>
                    <i className="settingicon fa-solid fa-user-large"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type='text' placeholder='Safak' />
                <label>E-Mail</label>
                <input type='email' placeholder='Safak@gmail.com' />
                <label>Password</label>
                <input type='password'/>
                <button className='settingsubmit'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Setting