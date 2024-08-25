import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { projectReducer } from "./project/reducer";
import { chatReducer } from "./chat/reducer";
import { commentReducer } from "./comment/reducer";
import { taskReducer } from "./task/reducer";
import { subscriptionReducer } from "./subscription/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  chat: chatReducer,
  comment: commentReducer,
  task: taskReducer,
  subscription: subscriptionReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
