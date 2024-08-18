import api, { API_BASE_URL } from "@/config/api"
import { ACCEPT_PROJECT_INVITATION_REQUEST, ACCEPT_PROJECT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, GET_PROJECT_BY_ID_REQUEST, GET_PROJECT_BY_ID_SUCCESS, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS, SEND_PROJECT_INVITATION_REQUEST, SEND_PROJECT_INVITATION_SUCCESS } from "./actionType"

export const getProjects=({category,tag})=> async(dispatch)=>{
    dispatch({type:GET_PROJECTS_REQUEST})
    try {
        const {data}=await api.get(`${API_BASE_URL}/project`,{
            params:{category,tag}
        })
        console.log("all projects",data)
        dispatch({type:GET_PROJECTS_SUCCESS,projects:data})
    } catch (err) {
        console.log(err)
    }
}

export const searchProjects=(keyword)=> async(dispatch)=>{
    dispatch({type:SEARCH_PROJECT_REQUEST})
    try {
        const {data}=await api.get(`${API_BASE_URL}/project/search`,{
            params:{keyword}
        })
        console.log("seached projects",data)
        dispatch({type:SEARCH_PROJECT_SUCCESS,projects:data})
    } catch (err) {
        console.log(err)
    }
}

export const getProjectById=(id)=> async(dispatch)=>{
    dispatch({type:GET_PROJECT_BY_ID_REQUEST})
    try {
        const {data}=await api.get(`${API_BASE_URL}/project/${id}`)
        console.log("project by id",data)
        dispatch({type:GET_PROJECT_BY_ID_SUCCESS,project:data})
    } catch (err) {
        console.log(err)
    }
}

export const createNewProject=(formData)=> async(dispatch)=>{
    dispatch({type:CREATE_PROJECT_REQUEST})
    try {
        const {data}=await api.post(`${API_BASE_URL}/project`,formData)
        console.log("created project",data)
        dispatch({type:CREATE_PROJECT_SUCCESS,project:data})
    } catch (err) {
        console.log(err)
    }
}

export const deleteProject=({id})=> async(dispatch)=>{
    dispatch({type:DELETE_PROJECT_REQUEST})
    try {
        const {data}=await api.delete(`${API_BASE_URL}/project/${id}`)
        console.log("delete project",data)
        dispatch({type:DELTE_PROJECT_SUCCESS,projectId:id})
    } catch (err) {
        console.log(err)
    }
}

export const inviteUser=({email,projectId})=> async(dispatch)=>{
    dispatch({type:SEND_PROJECT_INVITATION_REQUEST})
    try {9888
        const {data}=await api.post(`${API_BASE_URL}/project/invite`,{email,projectId})
        console.log("invite user for project",data)
        dispatch({type:SEND_PROJECT_INVITATION_SUCCESS,payload:data})
    } catch (err) {
        console.log(err)
    }
}

export const acceptProjectInvitation=({inviteToken,navigate})=> async(dispatch)=>{
    dispatch({type:ACCEPT_PROJECT_INVITATION_REQUEST})
    try {9888
        const {data}=await api.get(`${API_BASE_URL}/project/accept?token=${inviteToken}`)
        navigate("/project"+data.projectId)
        console.log("accept project invite",data)
        dispatch({type:ACCEPT_PROJECT_INVITATION_SUCCESS})
    } catch (err) {
        console.log(err)
    }
}