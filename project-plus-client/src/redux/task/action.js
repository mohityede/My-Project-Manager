import api, { API_BASE_URL } from "@/config/api";
import * as actionType from "./actionTypes";

export const getProjectTasks = (projectId) => async (dispatch) => {
  dispatch({ type: actionType.GET_TASKS_FOR_PROJECT_REQUEST });
  try {
    const { data } = await api.get(`${API_BASE_URL}/task/project/${projectId}`);
    dispatch({ type: actionType.GET_TASKS_FOR_PROJECT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: actionType.GET_TASKS_FOR_PROJECT_FAILURE,
      err: err.message,
    });
  }
};

export const getTaskById = (taskId) => async (dispatch) => {
  dispatch({ type: actionType.GET_TASK_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`${API_BASE_URL}/task/${taskId}`);
    dispatch({ type: actionType.GET_TASK_BY_ID_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: actionType.GET_TASK_BY_ID_FAILURE, err: err.message });
  }
};

export const createNewTask = (taskData) => async (dispatch) => {
  dispatch({ type: actionType.CREATE_TASK_REQUEST });
  try {
    const { data } = await api.post(`${API_BASE_URL}/task`, taskData);
    dispatch({ type: actionType.CREATE_TASK_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: actionType.CREATE_TASK_FAILURE, err: err.message });
  }
};

export const assignTaskToUser =
  ({ taskId, userId }) =>
  async (dispatch) => {
    dispatch({ type: actionType.ASSIGN_TASK_REQUEST });
    try {
      const { data } = await api.put(
        `${API_BASE_URL}/task/${taskId}/assign?userId=${userId}`
      );
      dispatch({ type: actionType.ASSIGN_TASK_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: actionType.ASSIGN_TASK_FAILURE, err: err.message });
    }
  };

export const updateTaskStatus =
  ({ taskId, status }) =>
  async (dispatch) => {
    dispatch({ type: actionType.UPDATE_TASK_STATUS_REQUEST });
    try {
      const { data } = await api.put(
        `${API_BASE_URL}/task/${taskId}/status?status=${status}`
      );
      dispatch({ type: actionType.UPDATE_TASK_STATUS_SUCCESS, payload: data });
    } catch (err) {
      dispatch({
        type: actionType.UPDATE_TASK_STATUS_FAILURE,
        err: err.message,
      });
    }
  };

export const deleteTask = (taskId) => async (dispatch) => {
  dispatch({ type: actionType.DELETE_TASK_REQUEST });
  try {
    const { data } = await api.delete(`${API_BASE_URL}/task/${taskId}`);
    dispatch({ type: actionType.DELETE_TASK_SUCCESS, taskId });
  } catch (err) {
    dispatch({ type: actionType.DELETE_TASK_FAILURE, err: err.message });
  }
};
