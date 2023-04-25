import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div className="header">
        <div className="headertitles">
            <span className="sm">React & Node</span>
            <span className="lg">Blog</span>
        </div>
        <img className="headerimg" src='/images/header.jpg' alt="dark"/>
    </div>
  )
}

export default Header