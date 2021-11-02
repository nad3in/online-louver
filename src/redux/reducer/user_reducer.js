
import * as user from '../action/actionTypes';
import initialState from "../initialState";
export const userReducer = (state = initialState.user, action) => {
    switch (action.type) {
        case user.SET_USER_INFO:
            return { userName: action.userData["userName"], userRole: action.userData["userRole"], isAuthanticated: action.userData["isAuthanticated"] }

        default:
            return state;
    }
};