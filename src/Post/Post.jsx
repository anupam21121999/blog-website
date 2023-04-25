import React from 'react'
import "./post.css"
const Post = () => {
  return (
    <div className="post">
        <img className="postimg" src="/images/post.jpeg" alt="dark" />
        <div className="postinfo">
            <div className="postcats">
                <span className="postcat">Music</span>
                <span className="postcat">Life</span>
            </div>
            <span className="posttitle">Lorem Epsum</span>
            <hr/>
            <span className="postdate">1 Hour Ago</span>
        </div>
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )
}

export default Post