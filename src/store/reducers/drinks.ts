import { listAction, listState, listActionsTypes } from "../types/drinks";

const defaultState: listState = {
    error: null,
    page: 'a',
    list: [],
}

export const listReducer = (state = defaultState, action: listAction): listState => {
    switch (action.type) {
        case listActionsTypes.SET_DRINKS_PAGE:
            return {
                error: null,
                page: action.payload,
                list: state.list,
            }
        case listActionsTypes.CHANGE_LIST:
            return {
                error: null,
                page: state.page,
                list: action.payload,
            }
        default:
            return state;
    }
}