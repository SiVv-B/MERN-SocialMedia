import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom"
import Home from "../../pages/Home"
import Profile from '../../pages/Profile'
import Trending from '../../pages/Trending'
import SignInForm from '../authentification/SignInForm'


  
  const IndexRoutes = () => {
    return (
      <div>
           <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={< Profile/>} />
            <Route path="/signin" element={< SignInForm/>} />
            <Route path="/trending" element={<Trending/>} />
            
         {/*    <Route path="/login" element={user ? <Navigate to ='/'/> : <Login/>} />
            <Route path="/register" element={user ? <Navigate to ='/'/> : <Register/>} />   */}      
          </Routes>
      </BrowserRouter>
      </div>
    )
  }
  
  export default IndexRoutes