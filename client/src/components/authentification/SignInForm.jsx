import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../../redux/Actions/AuthActions'

const SignInForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(register(user, navigate))
    setUser({
      username: '',
      email: '',
      password: '',
    })
    console.log('from signin onSubmit has been submitted')

  }

  return (
    <form action="" onSubmit={onSubmit} id="sign-up-form">
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleChange}
        value={user.username}
      />
      <div className="username error"></div>
      <br />
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={handleChange}
        value={user.email}
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        value={user.password}
      />
      <div className="password error"></div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  )
}

export default SignInForm
