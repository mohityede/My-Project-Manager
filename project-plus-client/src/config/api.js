import axios from "axios";

const BACKEND_APP_URL=import.meta.env.VITE_BACKEND_URL

export const REGISTER_USER_URL=BACKEND_APP_URL+"/auth/register";
export const LOGIN_USER_URL=BACKEND_APP_URL+"/auth/login";

export const API_BASE_URL=BACKEND_APP_URL+"/api/v1";

const api=axios.create({baseURL:API_BASE_URL})

api.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("jwt")}`
api.defaults.headers.common["Content-Type"]="application/json"

export default api;