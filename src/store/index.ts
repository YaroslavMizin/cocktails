import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { detailsReducer } from "./reducers/details";
import { listReducer } from "./reducers/drinks";
import { loadingReducer } from "./reducers/loading";
import { globalReducer } from "./reducers/global";
import { ingredientsReducer } from "./reducers/ingredients";

export const rootReducer = combineReducers({
    drinks: listReducer,
    ingredients: ingredientsReducer,
    loading: loadingReducer,
    details: detailsReducer,
    global: globalReducer,
})

export type rootStore = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));