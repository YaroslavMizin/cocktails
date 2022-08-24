import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { listReducer } from "./reducers/listReducer";
import { loadingReducer } from "./reducers/loadingReducer";

interface rootReducer {

}

export const rootReducer = combineReducers({
    letterlist: listReducer,
    loading: loadingReducer,
})

export type rootStore = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));