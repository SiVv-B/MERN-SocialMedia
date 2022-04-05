import {
    ADD_POST,
    GET_ALL_POSTS,
    UPDATE_POST,
    GET_POST,
    DELETE_POST,
  } from './ActionTypes'
  import axios from 'axios'
  


  export const addPost = (post) => async (dispatch) => {
    try {
      console.log(post)
      const response = await axios.post("/api/posts", post)
      dispatch({type:ADD_POST,payload:response.data})
  } catch (error) {
    console.log(error)
  }
  }
  

  export const Getposts = () => async (dispatch) => {
    try {
      const response = await axios.get('/api/posts')
      dispatch({ type: GET_ALL_POSTS, payload: response.data.posts })
    } catch (error) {
      console.log(error)
    }
  }
  
  export const deletepost = (id) => async (dispatch) => {
    try {
      const response = await axios.delete(`/api/posts/${id}`)
      dispatch(Getposts())
    } catch (error) {
      console.log(error)
    }
  }
  
  export const updatepost = (id, post) => async (dispatch) => {
    try {
      const response = await axios.put(`/api/posts/${id}`, post)
      console.log('from edit post action', response.data.post)
      dispatch({ type: UPDATE_POST, payload: response.data.post })
      dispatch(Getposts())
    } catch (error) {
      console.log(error)
    }
  }
  
  export const getOnepost = (id) => async (dispatch) => {
    const config = {
      headers: {
        token: localStorage.getItem('token'),
      },
    }
    try {
      const response = await axios.get(`/api/posts/${id}`, config)
      console.log('from postAction one post', response.data.postFound)
      dispatch({ type: GET_POST, payload: response.data.postFound })
    } catch (error) {
      console.log(error)
    }
  }
  