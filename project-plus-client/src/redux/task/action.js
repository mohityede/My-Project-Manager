import { API_BASE_URL } from "@/config/api";
import * as actionType from "./actionTypes"

export const getTaskById=(taskId) => async(dispatch)=>{
    dispatch({type:actionType.GET_TASK_BY_ID_REQUEST})
    try{
        const {data}=await axios.get(`${API_BASE_URL}/task/${taskId}`);
        console.log("task by id",data);
        dispatch({type:actionType.GET_TASK_BY_ID_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.GET_TASK_BY_ID_FAILURE,err:err.message})
    }
}

export const createNewTask=(taskData) => async(dispatch)=>{
    dispatch({type:actionType.CREATE_TASK_REQUEST})
    try{
        const {data}=await axios.post(`${API_BASE_URL}/task`,taskData);
        console.log("create task",data);
        dispatch({type:actionType.CREATE_TASK_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.CREATE_TASK_FAILURE,err:err.message})
    }
}

export const assignTaskToUser=({taskId,userId}) => async(dispatch)=>{
    dispatch({type:actionType.ASSIGN_TASK_REQUEST})
    try{
        const {data}=await axios.put(`${API_BASE_URL}/task/${taskId}/assign?userId=${userId}`);
        console.log("assign task",data);
        dispatch({type:actionType.ASSIGN_TASK_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.ASSIGN_TASK_FAILURE,err:err.message})
    }
}

export const updateTaskStatus=({taskId,status}) => async(dispatch)=>{
    dispatch({type:actionType.UPDATE_TASK_STATUS_REQUEST})
    try{
        const {data}=await axios.put(`${API_BASE_URL}/task/${taskId}/status?status=${status}`);
        console.log("update task status",data);
        dispatch({type:actionType.UPDATE_TASK_STATUS_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.UPDATE_TASK_STATUS_FAILURE,err:err.message})
    }
}

export const deleteTask=(taskId) => async(dispatch)=>{
    dispatch({type:actionType.DELETE_TASK_REQUEST})
    try{
        const {data}=await axios.delete(`${API_BASE_URL}/task/${taskId}`);
        console.log("delete task",data);
        dispatch({type:actionType.DELETE_TASK_SUCCESS,taskId})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.DELETE_TASK_FAILURE,err:err.message})
    }
}