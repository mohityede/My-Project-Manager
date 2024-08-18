import { API_BASE_URL } from "@/config/api";
import * as actionType from "./actionTypes"


export const sendChatMessage=(messageData) => async(dispatch)=>{
    dispatch({type:actionType.SEND_MESSAGE_REQUEST})
    try{
        const {data}=await axios.post(`${API_BASE_URL}/message`,messageData);
        console.log("send chat message",data);
        dispatch({type:actionType.SEND_MESSAGE_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.SEND_MESSAGE_FAILURE,err:err.message})
    }
}

export const getAllChatMessages=(projectId) => async(dispatch)=>{
    dispatch({type:actionType.GET_CHAT_ALL_MESSAGES_REQUEST})
    try{
        const {data}=await axios.get(`${API_BASE_URL}/message/project/${projectId}`);
        console.log("get all chat message",data);
        dispatch({type:actionType.GET_CHAT_ALL_MESSAGES_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.GET_CHAT_ALL_MESSAGES_FAILURE,err:err.message})
    }
}

export const getChat=(projectId) => async(dispatch)=>{
    dispatch({type:actionType.GET_CHAT_BY_PROJECT_REQUEST})
    try{
        const {data}=await axios.get(`${API_BASE_URL}/project/${projectId}/chat`);
        console.log("get chat",data);
        dispatch({type:actionType.GET_CHAT_BY_PROJECT_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.GET_CHAT_BY_PROJECT_FAILURE,err:err.message})
    }
}