import { rootReducer } from "./reducer";
import { createStore } from "redux";
import initialState from "./initialState"
import { applyMiddleware, compose }
    from "redux";
import thunk from "redux-thunk";
export const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk)
)
);