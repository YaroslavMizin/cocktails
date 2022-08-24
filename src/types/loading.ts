interface loadingState {
    loading: boolean
}

export enum loadingActionTypes {
    SET_LOADING = "SET LOADING",
    FINISH_LOADING = "FINISH_LOADING",
}

interface setLoadingAction {
    type: loadingActionTypes.SET_LOADING
}

interface finishLoadingAction {
    type: loadingActionTypes.FINISH_LOADING
}

export const defaultState: loadingState = {
    loading: false
}

export type loadingAction = setLoadingAction | finishLoadingAction;