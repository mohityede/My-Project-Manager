import axios from "axios"
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionTypes"
import { API_BASE_URL, LOGIN_USER_URL,REGISTER_USER_URL } from "@/config/api"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

export const register=userData => async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        console.log("userData",userData)
        const {data}=await axios.post(REGISTER_USER_URL,userData);
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt);
            dispatch({type:REGISTER_SUCCESS,payload:data})
        }
        console.log("register success",data);
    }catch(err){
        console.log(err)
    }
}

export const login=(userData) => async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try{
        const {data}=await axios.post(LOGIN_USER_URL,userData);
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt);
            dispatch({type:LOGIN_SUCCESS,payload:data})
        }
        console.log("login success",data);
    }catch(err){
        console.log(err)
    }
}

export const getUserProfile=() => async(dispatch)=>{
    dispatch({type:GET_USER_REQUEST})
    try{
        const {data}=await axios.get(`${API_BASE_URL}/user`,{
            headers:{
                "Authorization":`Bearer ${localStorage.getItem("jwt")}`
            }
        });
        dispatch({type:GET_USER_SUCCESS,payload:data})        
        console.log("user data:",data);
    }catch(err){
        console.log(err)
    }
}

export const logout=()=>async(dispatch)=>{
    dispatch({type:LOGOUT})
    localStorage.clear();
}