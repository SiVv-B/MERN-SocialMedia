import {
    ADD_POST,
    GET_ALL_POSTS,
    UPDATE_POST,
    GET_POST,
    DELETE_POST,
   
  } from '../Actions/ActionTypes'
  const initialState = {
    posts: [], post:null, updatedpost:null,message: ' hello', loading: true, isAuth: false,}
  const PostReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_POST :
        return {...state,post:action.payload.newpost,loading:false,isAuth:true}
      case GET_ALL_POSTS:
        return { ...state, posts: action.payload }
      case UPDATE_POST:
        return { ...state, post: action.payload }
        case GET_POST:
        return { ...state, post: action.payload, message: 'get one works' }
        case DELETE_POST:
      return { ...state, post: action.payload }
        default:
        return state
    
    }
  }
  export default PostReducer
  
  