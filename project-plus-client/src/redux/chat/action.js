import api, { API_BASE_URL } from "@/config/api";
import * as actionType from "./actionTypes";

export const sendChatMessage = (messageData) => async (dispatch) => {
  dispatch({ type: actionType.SEND_MESSAGE_REQUEST });
  try {
    const { data } = await api.post(`${API_BASE_URL}/message`, messageData);
    dispatch({ type: actionType.SEND_MESSAGE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: actionType.SEND_MESSAGE_FAILURE, err: err.message });
  }
};

export const getAllChatMessages = (projectId) => async (dispatch) => {
  dispatch({ type: actionType.GET_CHAT_ALL_MESSAGES_REQUEST });
  try {
    const { data } = await api.get(
      `${API_BASE_URL}/message/project/${projectId}`
    );
    dispatch({ type: actionType.GET_CHAT_ALL_MESSAGES_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: actionType.GET_CHAT_ALL_MESSAGES_FAILURE,
      err: err.message,
    });
  }
};

export const getChat = (projectId) => async (dispatch) => {
  dispatch({ type: actionType.GET_CHAT_BY_PROJECT_REQUEST });
  try {
    const { data } = await api.get(`${API_BASE_URL}/project/${projectId}/chat`);
    dispatch({ type: actionType.GET_CHAT_BY_PROJECT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: actionType.GET_CHAT_BY_PROJECT_FAILURE,
      err: err.message,
    });
  }
};
