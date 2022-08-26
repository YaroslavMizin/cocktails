import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { detailsReducer } from "./reducers/detailpageReducer";

import { listReducer } from "./reducers/listReducer";
import { loadingReducer } from "./reducers/loadingReducer";

interface rootReducer {

}

export const rootReducer = combineReducers({
    letterlist: listReducer,
    loading: loadingReducer,
    details: detailsReducer,
})

export type rootStore = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));