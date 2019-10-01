import {combineReducers} from "redux";
import postReducer from "./post";
import authReducer from "./auth";

export default combineReducers({
    post: postReducer,
    auth: authReducer
}) 