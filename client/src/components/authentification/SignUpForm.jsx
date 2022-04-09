import React, { useState } from "react";
import SignInForm from "./SignInForm";
import { useDispatch } from 'react-redux'
import { login } from '../../redux/Actions/AuthActions'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  const [formSubmit, setFormSubmit] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' })

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value })
  }
  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(login(user, navigate))
    setUser({ email: '', password: '' })
    
  }


  return (
    
    <>
    {formSubmit ? (
      <>
        <SignInForm />
        <span></span>
        <h4 className="success">
          Enregistrement réussi, veuillez-vous connecter
        </h4>
      </>
    ) : (
      <form action="" onSubmit={onSubmit} id="sign-up-form">
        <label htmlFor="pseudo">Pseudo</label>
        <br />
        <input
          type="text"
          name="pseudo"
          id="pseudo"
          onChange={handleChange}
          value={user.pseudo}
        />
        <div className="pseudo error"></div>
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
        <label htmlFor="passwordconf">Confirmer mot de passe</label>
        <br/>
        <input
          type="password"
          name="password"
          id="passwordconf"
          onChange={handleChange}
          value={user.passwordconf}
        />
        <div className="password-confirm error"></div>
        <br />
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          J'accepte les{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            conditions générales
          </a>
        </label>
        <div className="terms error"></div>
        <br />
        <input type="submit" value="Valider inscription" />
      </form>
    )}
  </>
  )
}

export default SignUpForm