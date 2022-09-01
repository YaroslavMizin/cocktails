import { listAction, listActionsTypes, listState } from "../../types/ingredients";

const defaultState: listState = {
    letter: 'a',
    error: null,
    all: [],
    list: [],
}

export const ingredientsReducer = (state = defaultState, action: listAction) => {
    switch (action.type) {
        case listActionsTypes.SET_GLOBAL_LIST:
            return {
                all: [...state.all, action.payload],
                error: null,
                list: state.list,
                letter: state.letter,
            }
        default:
            return state;
    }
}