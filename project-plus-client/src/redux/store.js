import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/reducer";

const rootReducer=combineReducers({
    auth:authReducer
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk)); 

export default store;