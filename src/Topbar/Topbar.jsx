import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'
const Topbar = () => {
  return (
    <div className="top">
     <div className="topleft">
     <i className="topicons fa-brands fa-facebook-f"></i>
     <i className="topicons fa-brands fa-square-twitter"></i>
     <i className="topicons fa-brands fa-pinterest"></i>
     <i className="topicons fa-brands fa-instagram"></i>
     </div>

     <div className="topcentre">
        <ul className="toplist">
            <li className="toplistitems">
              <Link to="/" style={{textDecoration:"none",color:"aliceblue"}}>HOME</Link>
            </li>
            <li className="toplistitems">
            <Link to="/About" style={{textDecoration:"none",color:"aliceblue"}}>ABOUT</Link>
            </li>
            <li className="toplistitems">
            <Link to="/Contact" style={{textDecoration:"none",color:"aliceblue"}}>CONTACT</Link>
            </li>
            <li className="toplistitems">
            <Link to="/Write" style={{textDecoration:"none",color:"aliceblue"}}>WRITE</Link>
            </li>
            <li className="toplistitems">
            <Link to="/Logout" style={{textDecoration:"none",color:"aliceblue"}}>LOGOUT</Link>
            </li>
        </ul>
     </div>

     <div className="topright">
        <img className="topimg" src="/images/img1.jpg" alt="dark" />
        <i className="searchicon  fa-solid fa-magnifying-glass"></i>
     </div>
    </div>
  )
}

export default Topbar