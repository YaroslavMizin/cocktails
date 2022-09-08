import { loadingActionTypes } from "../types/loading";

export function setLoading () {
    return ({type: loadingActionTypes.SET_LOADING });
}

export const finishLoading = () => {
    return ({type: loadingActionTypes.FINISH_LOADING });
}