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
import PrivateRoute from './PrivateRoute'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/Actions/AuthActions'


  
  const IndexRoutes = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      if (localStorage.getItem('token')) {
        dispatch(getUser())
      }
    }, [])
  
    return (
      <div>
           <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            
            <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
{/*             <Route path="/profile" element={< Profile/>} />
 */}            <Route path="/signin" element={< SignInForm/>} />
            <Route path="/trending" element={<Trending/>} />
            
          
          </Routes>
      </BrowserRouter>
      </div>
    )
  }
  
  export default IndexRoutes