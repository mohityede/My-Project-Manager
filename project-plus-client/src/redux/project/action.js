import api, { API_BASE_URL } from "@/config/api";
import * as actionType from "./actionTypes";

export const getProjects =
  ({ category, tag }) =>
  async (dispatch) => {
    dispatch({ type: actionType.GET_PROJECTS_REQUEST });
    try {
      const { data } = await api.get(`${API_BASE_URL}/project`, {
        params: { category, tag },
      });
      dispatch({ type: actionType.GET_PROJECTS_SUCCESS, projects: data });
    } catch (err) {
      dispatch({ type: actionType.GET_PROJECTS_FAILURE, err: err.message });
    }
  };

export const searchProjects = (keyword) => async (dispatch) => {
  dispatch({ type: actionType.SEARCH_PROJECT_REQUEST });
  try {
    const { data } = await api.get(`${API_BASE_URL}/project/search`, {
      params: { keyword },
    });
    dispatch({ type: actionType.SEARCH_PROJECT_SUCCESS, projects: data });
  } catch (err) {
    dispatch({ type: actionType.SEARCH_PROJECT_FAILURE, err: err.message });
  }
};

export const getProjectById = (id) => async (dispatch) => {
  dispatch({ type: actionType.GET_PROJECT_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`${API_BASE_URL}/project/${id}`);
    dispatch({ type: actionType.GET_PROJECT_BY_ID_SUCCESS, project: data });
  } catch (err) {
    dispatch({ type: actionType.GET_PROJECT_BY_ID_FAILURE, err: err.message });
  }
};

export const createNewProject = (formData) => async (dispatch) => {
  dispatch({ type: actionType.CREATE_PROJECT_REQUEST });
  try {
    const { data } = await api.post(`${API_BASE_URL}/project`, formData);
    dispatch({ type: actionType.CREATE_PROJECT_SUCCESS, project: data });
  } catch (err) {
    dispatch({ type: actionType.CREATE_PROJECT_FAILURE, err: err.message });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  dispatch({ type: actionType.DELETE_PROJECT_REQUEST });
  try {
    const { data } = await api.delete(`${API_BASE_URL}/project/${id}`);
    dispatch({ type: actionType.DELETE_PROJECT_SUCCESS, projectId: id });
  } catch (err) {
    dispatch({ type: actionType.DELETE_PROJECT_FAILURE, err: err.message });
  }
};

export const inviteUser =
  ({ email, projectId }) =>
  async (dispatch) => {
    dispatch({ type: actionType.SEND_PROJECT_INVITATION_REQUEST });
    try {
      9888;
      const { data } = await api.post(`${API_BASE_URL}/project/invite`, {
        email,
        projectId,
      });
      dispatch({
        type: actionType.SEND_PROJECT_INVITATION_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: actionType.SEND_PROJECT_INVITATION_FAILURE,
        err: err.message,
      });
    }
  };

export const acceptProjectInvitation =
  ({ inviteToken, navigate }) =>
  async (dispatch) => {
    dispatch({ type: actionType.ACCEPT_PROJECT_INVITATION_REQUEST });
    try {
      const { data } = await api.get(
        `${API_BASE_URL}/project/invite/accept?token=${inviteToken}`
      );
      navigate("/project/" + data.projectId);
      dispatch({ type: actionType.ACCEPT_PROJECT_INVITATION_SUCCESS });
    } catch (err) {
      dispatch({
        type: actionType.ACCEPT_PROJECT_INVITATION_FAILURE,
        err: err.message,
      });
    }
  };
