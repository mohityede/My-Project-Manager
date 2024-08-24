import * as actionType from "./actionTypes"

const intialState={
    loading:false,
    err:null,
    tasks:[],
    taskDetails:null
}

export const taskReducer=(state=intialState,action)=>{
    switch (action.type) {
        case actionType.GET_TASKS_FOR_PROJECT_REQUEST:
        case actionType.ASSIGN_TASK_REQUEST:
        case actionType.CREATE_TASK_REQUEST:
        case actionType.DELETE_TASK_REQUEST:
        case actionType.GET_TASK_BY_ID_REQUEST:
        case actionType.UPDATE_TASK_STATUS_REQUEST:
            return {
                ...state,
                loading:true,
                err:null
            }
        case actionType.GET_TASKS_FOR_PROJECT_SUCCESS:
            return {
                ...state,
                loading:false,
                err:null,
                tasks:action.payload
            }
        case actionType.CREATE_TASK_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    err:null,
                    tasks:[...state.tasks,action.payload]
                }
        case actionType.ASSIGN_TASK_SUCCESS:
            return {
                ...state,
                loading:false,
                err:null,
                tasks: state.tasks.map(task=>
                    (task.id === action.payload.id)?action.payload:task
                )
            }
        case actionType.ASSIGN_TASK_SUCCESS:
            return {
                ...state,
                loading:false,
                err:null,
                tasks: state.tasks.filter(task=> task.id !== action.taskId)
            }
        case actionType.GET_TASK_BY_ID_SUCCESS:
        case actionType.UPDATE_TASK_STATUS_SUCCESS:
            return {
                ...state,
                loading:false,
                err:null,
                taskDetails:action.payload,
            }     
        case actionType.DELETE_TASK_SUCCESS:
            return{
                ...state,
                loading:false,
                err:null,
                tasks:state.tasks.filter(task => task.id !== action.taskId)
            }
        case actionType.GET_TASKS_FOR_PROJECT_FAILURE:
        case actionType.ASSIGN_TASK_FAILURE:
        case actionType.CREATE_TASK_FAILURE:
        case actionType.DELETE_TASK_FAILURE:
        case actionType.GET_TASK_BY_ID_FAILURE:
        case actionType.UPDATE_TASK_STATUS_FAILURE:
            return{
                ...state,
                loading:false,
                err:action.err
            }
        default:
            return state;
    }
}