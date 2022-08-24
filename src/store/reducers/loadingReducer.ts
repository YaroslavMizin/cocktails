import { defaultState, loadingAction, loadingActionTypes } from "../../types/loading";

export const loadingReducer = (state = defaultState, action: loadingAction) => {
    switch (action.type) {
        case loadingActionTypes.SET_LOADING:
            return { loading: true };
        case loadingActionTypes.FINISH_LOADING:
            return { loading: false };
        default:
            return state;
    }
}