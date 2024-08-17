import { ACCEPT_PROJECT_INVITATION_REQUEST, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, GET_CHAT_SUCCESS, GET_PROJECT_BY_ID_REQUEST, GET_PROJECT_BY_ID_SUCCESS, GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS, SEND_PROJECT_INVITATION_REQUEST, SEND_PROJECT_INVITATION_SUCCESS } from "./actionType";


const intialState={
    projects:[],
    loading:false,
    err:null,
    ProjectDetails:null,
    searchProjects:[],
    chat:null
}

export const projectReducer=(state=intialState,action)=>{
    switch (action.type) {
        case GET_PROJECTS_REQUEST:
        case CREATE_PROJECT_REQUEST:
        case GET_PROJECT_BY_ID_REQUEST:
        case SEARCH_PROJECT_REQUEST:
        case DELETE_PROJECT_REQUEST:
        case SEND_PROJECT_INVITATION_REQUEST:
        case ACCEPT_PROJECT_INVITATION_REQUEST:
            return {
                ...state,
                loading:true,
                err:null
            }
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                loading:false,
                projects:action.projects,
                err:null
            }
        case SEARCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading:false,
                searchProjects:action.projects,
                err:null
            }
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading:false,
                projects:[...state.projects,action.project],
                err:null
            }
        case GET_PROJECT_BY_ID_SUCCESS:
            return {
                ...state,
                loading:false,
                ProjectDetails:action.project,
                err:null
            }
        case DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading:false,
                err:null,
                projects: state.projects.filter(
                    (project) => project.id === action.projectId
                )
            }
        default:
            return state;
    }
}