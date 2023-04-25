import React from 'react'
import Header from '../../Header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'
import SinglePost from '../../SinglePost/SinglePost'
import Login from '../Login/Login'
import "./home.css"
const Home = () => {
  return (
    <>
        <Header/>
        <div className="home">
          <Posts/>
          <Sidebar/>
          <SinglePost/>
        </div>
        <Login/>
    </>
  )
}

export default Home