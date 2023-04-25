import React from 'react'
import Topbar from './Topbar/Topbar'
import Login from './Pages/Login/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Setting from './Pages/Settings/Setting';
import Write from './Pages/Write/Write';
import ContactForm from './Contact/contact';
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Topbar/>
      <Home/>
      <Link to="/Setting"></Link>
      <Link to="/Login"></Link>
      <Link to="/Write"></Link>
      <Link to="/About"></Link>
    <Routes>
    <Route exact path="/Login" element={<Login/>}></Route>
    <Route exact path="/Write" element={<Write/>}></Route>
    <Route exact path="/Setting" element={<Setting/>}></Route>
    <Route exact path="/About" element={<ContactForm/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App