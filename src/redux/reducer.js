import { combineReducers } from "redux";
import { userReducer } from "./reducer/user_reducer";

export const rootReducer = combineReducers({
    user: userReducer
    // other feature reducers come in here
});