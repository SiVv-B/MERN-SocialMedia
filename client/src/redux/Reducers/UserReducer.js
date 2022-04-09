import {
  GET_ALL_USERS,
  UPDATE_USER,
  GET_USER,
  DELETE_USER,
} from '../Actions/ActionTypes'
const initialState = {
  users: [],
  user: null,
  updatedUser: null,
  message: ' hello',
  loading: true,
  isAuth: false,
}
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload }
    case UPDATE_USER:
      return { ...state, user: action.payload }
    case GET_USER:
      return { ...state, user: action.payload, message: 'get one user works' }
    case DELETE_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
export default UserReducer
