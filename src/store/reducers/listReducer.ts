import { letterAction, CHANGE_LETTER, letterState } from "../../types/letters"

const defaultState: letterState = {
    letter: 'a',
    error: null
}

export const listReducer = (state = defaultState, action: letterAction): letterState => {
    switch (action.type) {
        case CHANGE_LETTER:
            return { error: null, letter: action.payload }
        default:
            return state;
    }
}