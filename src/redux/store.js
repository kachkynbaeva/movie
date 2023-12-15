import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {movieReducer} from "./movieReducer";

export const store = createStore (
    movieReducer,
    composeWithDevTools(applyMiddleware(thunk))
)