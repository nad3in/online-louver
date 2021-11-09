
import * as user from '../action/actionTypes';
import initialState from "../initialState";
export const usersReducer = (state = initialState.users, action) => {
    switch (action.type) {
        case user.SET_USERS:
            return { ...action.data }

        default:
            return state;
    }
};