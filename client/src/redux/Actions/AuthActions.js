import axios from 'axios'
import {
  USER_RGISTER,
  USER_FAIL,
  USER_LOGIN,
  GET_USER,
  LOG_OUT,
} from '../Actions/ActionTypes'

export const register = (user, navigate) => async (dispatch) => {
  try {
    console.log('from authAction register', user)

    const response = await axios.post('api/auth/register', user)
    console.log('register from authAction user:', user)
    console.log('register from authAction resonse:', response)
    dispatch({ type: USER_RGISTER, payload: response })
    navigate('/profile')
  } catch (error) {
    dispatch({ type: USER_FAIL })
    console.log('error from action auth register', error)
    error.response.data.errors &&
      error.response.data.errors.map((err) => alert(err.msg))
  }
}

export const login = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('api/auth/login', user)
    console.log("authAction login",response.data)

    dispatch({ type: USER_LOGIN, payload: response.data })
    navigate('/profile')
  } catch (error) {
    dispatch({ type: USER_FAIL })
    error.response.data.errors.map((err) => alert(err.msg))
  }
}
export const logOut = () => {
  return { type: LOG_OUT }
}


//login with token
export const getUser = () => async (dispatch) => {
  const config = {
    headers: {
      "token": localStorage.getItem('token'),
    },
  }
  try {
    const response = await axios.get('api/auth/current', config)
    console.log(' from authAction get user', response.data)
    

    dispatch({ type: GET_USER, payload: response.data })


  } catch (error) {
    dispatch({ type: USER_FAIL })
   /*  error.response.data.errors.map((err) => alert(err.msg)) */
  }
}
