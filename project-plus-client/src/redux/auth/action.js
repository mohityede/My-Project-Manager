import { API_BASE_URL, LOGIN_USER_URL, REGISTER_USER_URL } from "@/config/api";
import * as actionType from "./actionTypes";
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  dispatch({ type: actionType.REGISTER_REQUEST });
  try {
    const { data } = await axios.post(REGISTER_USER_URL, userData);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: actionType.REGISTER_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({ type: actionType.REGISTER_FAILURE, err: err.message });
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: actionType.LOGIN_REQUEST });
  try {
    const { data } = await axios.post(LOGIN_USER_URL, userData);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: actionType.LOGIN_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({ type: actionType.LOGIN_FAILURE, err: err.message });
  }
};

export const getUserProfile = () => async (dispatch) => {
  dispatch({ type: actionType.GET_USER_REQUEST });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    dispatch({ type: actionType.GET_USER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: actionType.GET_USER_FAILURE, err: err.message });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: actionType.LOGOUT });
  localStorage.clear();
};
