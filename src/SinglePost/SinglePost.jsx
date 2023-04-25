import React from 'react'
import './SinglePost.css'
const SinglePost = () => {
  return (
    <div className="singlepost">
        <div className='singlepostwrapper'>
            <img className='singlepostimg' src='/images/singlepost.jpg' alt='dark' style={{float:"left",left:"0",marginRight:"10px"}} />
            <h1 className='singleposttitle'>
                Lorem Epsum
                <div className='singlepostedit'>
                <i className="singleposticon fa-regular fa-pen-to-square"></i>
                <i className="singleposticon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className='singlepostinfo'>
              <span className='singlepostauthor'>
                Author : <b> SAFAK </b>
              </span>
              <span className='singlepostdate'>
                1 Hour Ago
              </span>
              </div>
              <div className='desc'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
  )
}

export default SinglePost