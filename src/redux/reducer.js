import { combineReducers } from "redux";
import { userReducer } from "./reducer/user_reducer";
import { artPiecesReducer } from "./reducer/art_pieces_reducer";
import { usersReducer } from "./reducer/users_reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    artPieces: artPiecesReducer,
    users: usersReducer
    // other feature reducers come in here
});