import * as actionType from "./actionTypes"

const intialState={
    loading:false,
    err:null,
    userSubscription:null
}

export const subscriptionReducer=(state=intialState,action)=>{
    switch (action.type) {

        case actionType.GET_USER_SUBSCRIPTION_REQUEST:
        case actionType.UPGRADE_SUBSCRIPTION_REQUEST:
            return {
                ...state,
                loading:true,
                err:null
            }
        case actionType.GET_USER_SUBSCRIPTION_SUCCESS:
        case actionType.UPGRADE_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                loading:false,
                err:null,
                userSubscription:action.payload
            }
        case actionType.GET_USER_SUBSCRIPTION_FAILURE:
        case actionType.UPGRADE_SUBSCRIPTION_FAILURE:
            return{
                ...state,
                loading:false,
                err:action.err
            }
        default:
            return state;
    }
}