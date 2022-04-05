import axios from "axios"
import {USER_RGISTER,USER_FAIL,USER_LOGIN,LOG_OUT,} from "../Actions/ActionTypes"



export const login=(user,navigate)=>async(dispatch)=>{
    try {
       
        const response=await axios.post('api/user/login',user)
        dispatch({type:USER_LOGIN,payload:response.data})
        navigate('/profile')
    } catch (error) {
        dispatch({type:USER_FAIL})
        error.response.data.errors.map(err=>alert(err.msg))
    }
}
export const logOut=()=>{
 return {type:LOG_OUT}
}

export const register=(user,navigate)=>async(dispatch)=>{
    try {
        const response=await axios.post('api/user/register',user)
        console.log("register",response)
        dispatch({type:USER_RGISTER,payload:response.data})
        navigate('/profile')
    } catch (error) {
        dispatch({type:USER_FAIL})
        error.response.data.errors.map(err=>alert(err.msg))
    }
}