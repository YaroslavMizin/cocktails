import { listAction, listState, listActionsTypes } from "../types/ingredients";

const defaultState: listState = {
    page: 'a',
    error: null,
    list: [] as string[],
    filters: {

    }
}

export const ingredientsReducer = (state = defaultState, action: listAction): listState => {
    switch (action.type) {
        case listActionsTypes.CHANGE_INGREDIENTS:
            return {
                page: state.page,
                error: null,
                list: action.payload,
                filters: state.filters
            }
        case listActionsTypes.SET_INGREDIENTS_PAGE:
            return {
                page: action.payload,
                error: null,
                list: state.list,
                filters: state.filters
            }
        default: return state;
    }
}