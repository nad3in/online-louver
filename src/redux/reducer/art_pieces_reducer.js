import * as actionTypes from '../action/actionTypes';
import initialState from "../initialState";
export const artPiecesReducer = (state = initialState.artPieces, action) => {
    switch (action.type) {
        case actionTypes.SET_ART_PIECES:
            return { ...action.data }

        default:
            return state;
    }
};