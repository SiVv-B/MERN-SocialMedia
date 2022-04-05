import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'
import PostReducer from './PostReducer'

import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  AuthReducer: AuthReducer,
  UserReducer: UserReducer,
  PostReducer: PostReducer,
})
export default rootReducer
