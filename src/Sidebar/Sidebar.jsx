import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebaritem">
                <span className="sidebartitle">About Me</span>
                <img className="aboutimg" src="/images/about.jpg" alt="dark" />
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="sidebaritem">
                <span className="sidebartitle">Categories</span>
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">Life</li>
                    <li className="sidebarlistitem">Music</li>
                    <li className="sidebarlistitem">Style</li>
                    <li className="sidebarlistitem">Sports</li>
                    <li className="sidebarlistitem">Tech</li>
                    <li className="sidebarlistitem">Cinema</li>
                </ul>
            </div>
            <div className="sidebaritem">
                <span className="sidebartitle">Follow Us</span>
                <div className="sidebarsocial">
                        <i className="sidebaricon fa-brands fa-facebook-f"></i>
                        <i className="sidebaricon fa-brands fa-square-twitter"></i>
                        <i className="sidebaricon fa-brands fa-pinterest"></i>
                        <i className="sidebaricon fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar