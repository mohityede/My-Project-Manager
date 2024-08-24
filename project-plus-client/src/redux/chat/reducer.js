import * as actionType from "./actionTypes";

const intialState = {
  loading: false,
  err: null,
  chat: null,
  messages: [],
};

export const chatReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.GET_MESSAGES_REQUEST:
    case actionType.SEND_MESSAGE_REQUEST:
    case actionType.GET_CHAT_BY_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
        err: null,
      };

    case actionType.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };
    case actionType.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload],
      };
    case actionType.GET_CHAT_BY_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        chat: action.payload,
      };

    case actionType.GET_MESSAGES_FAILURE:
    case actionType.SEND_MESSAGE_FAILURE:
    case actionType.GET_CHAT_BY_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        err: action.err,
      };
    default:
      return state;
  }
};
