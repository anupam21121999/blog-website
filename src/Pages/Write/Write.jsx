import React from 'react'
import './write.css'
const Write = () => {
  return (
    <div className='write'>
    <img className='writeimg' src='/images/write.jpg' alt='dark' />
      <form className='writeform'>
        <div className='writeformgroup'>
          <label htmlFor='fileInput'>
          <i className="writeicon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}></input>
          <input type="text" placeholder='Title' className='writeinput' autoFocus={true}></input>
        </div>
        <div className='writeformgroup'>
          <textarea placeholder='Tell Your Story' type='text' className='writeinput'></textarea>
        </div>
        <button className='writesubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write