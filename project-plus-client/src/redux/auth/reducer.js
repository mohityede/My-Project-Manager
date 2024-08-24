import * as actionType from "./actionTypes";

const intialState = {
  user: null,
  loading: false,
  err: null,
  jwt: null,
};

export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.REGISTER_REQUEST:
    case actionType.LOGIN_REQUEST:
    case actionType.GET_USER_REQUEST:
      return { ...state, loading: true, err: null };

    case actionType.REGISTER_SUCCESS:
    case actionType.LOGIN_SUCCESS:
      return { ...state, loading: false, err: null, jwt: action.payload.jwt };
    case actionType.GET_USER_SUCCESS:
      return { ...state, loading: false, err: null, user: action.payload };

    case actionType.REGISTER_FAILURE:
    case actionType.LOGIN_FAILURE:
    case actionType.GET_USER_FAILURE:
      return { ...state, loading: false, err: action.err };
    case actionType.LOGOUT:
      return intialState;
    default:
      return state;
  }
};
