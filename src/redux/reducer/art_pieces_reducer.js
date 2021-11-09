import * as actionTypes from '../action/actionTypes';
import initialState from "../initialState";
export const artPiecesReducer = (state = initialState.artPieces, action) => {
    switch (action.type) {
        case actionTypes.SET_ART_PIECES:
            return { ...action.data }
        case actionTypes.DELETE_ART_PIECE:
            var updated = JSON.parse(JSON.stringify(state));
            delete updated[action.id];
            return { ...updated }

        default:
            return state;
    }
};