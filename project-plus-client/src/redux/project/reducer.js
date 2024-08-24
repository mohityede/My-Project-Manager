import * as actionType from "./actionTypes"

const intialState={
    projects:[],
    loading:false,
    err:null,
    projectDetails:null,
    searchProjects:[],
    chat:null
}

export const projectReducer=(state=intialState,action)=>{
    switch (action.type) {
        case actionType.GET_PROJECTS_REQUEST:
        case actionType.CREATE_PROJECT_REQUEST:
        case actionType.GET_PROJECT_BY_ID_REQUEST:
        case actionType.SEARCH_PROJECT_REQUEST:
        case actionType.DELETE_PROJECT_REQUEST:
        case actionType.SEND_PROJECT_INVITATION_REQUEST:
        case actionType.ACCEPT_PROJECT_INVITATION_REQUEST:
            return {
                ...state,
                loading:true,
                err:null
            }
        case actionType.GET_PROJECTS_SUCCESS:
            return {
                ...state,
                loading:false,
                projects:action.projects,
                err:null
            }
        case actionType.SEARCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading:false,
                searchProjects:action.projects,
                err:null
            }
        case actionType.CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading:false,
                projects:[...state.projects,action.project],
                err:null
            }
        case actionType.GET_PROJECT_BY_ID_SUCCESS:
            return {
                ...state,
                loading:false,
                projectDetails:action.project,
                err:null
            }
        case actionType.DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading:false,
                err:null,
                projects: state.projects.filter(
                    (project) => project.id !== action.projectId
                )}
        case actionType.ACCEPT_PROJECT_INVITATION_SUCCESS:
        case actionType.SEND_PROJECT_INVITATION_SUCCESS:
            return {
                ...state,
                loading:false,
                err:null
            }
        
        case actionType.GET_PROJECTS_FAILURE:
        case actionType.CREATE_PROJECT_FAILURE:
        case actionType.GET_PROJECT_BY_ID_FAILURE:
        case actionType.SEARCH_PROJECT_FAILURE:
        case actionType.DELETE_PROJECT_FAILURE:
        case actionType.SEND_PROJECT_INVITATION_FAILURE:
        case actionType.ACCEPT_PROJECT_INVITATION_FAILURE:
            return {
                ...state,
                loading:false,
                err:action.err
            }
        default:
            return state;
    }
}