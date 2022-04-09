import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  return (
    <div>
      {
        //if there is something in the localstorage then get the item called authToken
        //then render the component
        token ? children : <Navigate to="/signin" />
      }
    </div>
  )
}
export default PrivateRoute
