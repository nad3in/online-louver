import { combineReducers } from "redux";
import { userReducer } from "./reducer/user_reducer";
import { artPiecesReducer } from "./reducer/art_pieces_reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    artPieces: artPiecesReducer
    // other feature reducers come in here
});