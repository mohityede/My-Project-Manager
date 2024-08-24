import api, { API_BASE_URL } from "@/config/api";
import * as actionType from "./actionTypes"


export const getUserSubscription=() => async(dispatch)=>{
    dispatch({type:actionType.GET_USER_SUBSCRIPTION_REQUEST})
    try{
        const {data}=await api.get(`${API_BASE_URL}/subscription/user`);
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
        const {data}=await api.patch(`${API_BASE_URL}/subscription/upgrade?planType=${planType}`); // header is already passing through config
        console.log("upgrade subscription",data);
        dispatch({type:actionType.UPGRADE_SUBSCRIPTION_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.UPGRADE_SUBSCRIPTION_FAILURE,err:err.message})
    }
}

export const payPrice=(planType,amount) => async(dispatch)=>{
    dispatch({type:actionType.PAY_REQUEST})
    try{
        const {data}=await api.get(`${API_BASE_URL}/payment/pay?amount=${amount}&planType=${planType}`); // header is already passing through config
        console.log("pay amount",data);
        dispatch({type:actionType.PAY_SUCCESS,payload:data})
    }catch(err){
        console.error("error:",err)
        dispatch({type:actionType.PAY_FAILURE,err:err.message})
    }
}