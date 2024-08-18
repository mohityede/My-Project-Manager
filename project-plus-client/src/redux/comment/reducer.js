import * as actionType from "./actionTypes"

const intialState={
    loading:false,
    err:null,
    comments:[]
}

export const commentReducer=(state=intialState,action)=>{
    switch (action.type) {
        case actionType.GET_COMMENTS_REQUEST:
        case actionType.CREATE_COMMENT_REQUEST:
        case actionType.DELETE_COMMENT_REQUEST:
            return {
                ...state,
                loading:true,
                err:null
            }
        case actionType.CREATE_COMMENT_SUCCESS:
            return{
                ...state,
                loading:false,
                err:null,
                comments:[...state.comments,action.payload]
            }
        case actionType.GET_COMMENTS_SUCCESS:
            return{
                ...state,
                loading:false,
                err:null,
                comments:action.payload
            }
        case actionType.DELETE_COMMENT_SUCCESS:
            return{
                ...state,
                loading:false,
                err:null,
                comments: state.comments.filter(comment => comment.id != action.commentId)
            }
        case actionType.GET_COMMENTS_FAILURE:
        case actionType.CREATE_COMMENT_FAILURE:
        case actionType.DELETE_COMMENT_FAILURE:
            return{
                ...state,
                loading:false,
                err:action.err
            }
        default:
            return state;
    }
}