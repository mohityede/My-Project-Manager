import { API_BASE_URL } from "@/config/api";
import * as actionType from "./actionTypes"


export const getAllTaskComments=(taskId) => async(dispatch)=>{
    dispatch({type:actionType.GET_COMMENTS_REQUEST})
    try{
        const {data}=await axios.get(`${API_BASE_URL}/comment/task/${taskId}`);
        console.log("all task comments",data);
        dispatch({type:actionType.GET_COMMENTS_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.GET_COMMENTS_FAILURE,err:err.message})
    }
}

export const createNewComment=(commentData) => async(dispatch)=>{
    dispatch({type:actionType.CREATE_COMMENT_REQUEST})
    try{
        const {data}=await axios.post(`${API_BASE_URL}/comment`,commentData);
        console.log("create task comment",data);
        dispatch({type:actionType.CREATE_COMMENT_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.CREATE_COMMENT_FAILURE,err:err.message})
    }
}

export const deleteTaskComment=(commentId) => async(dispatch)=>{
    dispatch({type:actionType.DELETE_COMMENT_REQUEST})
    try{
        const {data}=await axios.delete(`${API_BASE_URL}/comment/${commentId}`);
        console.log("deleted comment",data);
        dispatch({type:actionType.DELETE_COMMENT_SUCCESS,commentId})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.DELETE_COMMENT_FAILURE,err:err.message})
    }
}