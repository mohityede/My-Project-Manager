import { API_BASE_URL } from "@/config/api";
import * as actionType from "./actionTypes"


export const getUserSubscription=() => async(dispatch)=>{
    dispatch({type:actionType.GET_USER_SUBSCRIPTION_REQUEST})
    try{
        const {data}=await axios.get(`${API_BASE_URL}/subscription/user`);
        console.log("get user subscription",data);
        dispatch({type:actionType.GET_USER_SUBSCRIPTION_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.GET_USER_SUBSCRIPTION_FAILURE,err:err.message})
    }
}

export const upgradeSubscription=(planType) => async(dispatch)=>{
    dispatch({type:actionType.UPGRADE_SUBSCRIPTION_REQUEST})
    try{
        const {data}=await axios.patch(`${API_BASE_URL}/subscription/upgrade?planType=${planType}`); // header is already passing through config
        console.log("upgrade subscription",data);
        dispatch({type:actionType.UPGRADE_SUBSCRIPTION_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.UPGRADE_SUBSCRIPTION_FAILURE,err:err.message})
    }
}