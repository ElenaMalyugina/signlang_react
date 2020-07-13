import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import regReducer from "./regReducer";

export default combineReducers({
    login: loginReducer,
    reg: regReducer
});