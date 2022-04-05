import axios from 'axios'
import {
  USER_RGISTER,
  USER_FAIL,
  USER_LOGIN,
  LOG_OUT,
} from '../Actions/ActionTypes'


 export const register = (user, navigate) => async (dispatch) => {
  try {
    console.log("from authAction register",user)

    const response = await axios.post("api/auth/register", user)
    console.log('register from authAction user:', user)
    console.log('register from authAction resonse:', response)
    dispatch({ type: USER_RGISTER, payload: response })
    navigate('/home')
  } catch (error) {
    dispatch({ type: USER_FAIL })
    console.log('error from action auth register',error)
    error.response.data.errors && error.response.data.errors.map((err) => alert(err.msg))
  }
} 

export const login = (user, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('api/auth/login', user)
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


