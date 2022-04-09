import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logOut } from '../redux/Actions/AuthActions'

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logOut())
    navigate('/')
  }
  return (
    <div className="profil-page">
      
this is a profile

<button onClick={handleClick} >Logout</button>
    </div>
  );
};

export default Profile;
