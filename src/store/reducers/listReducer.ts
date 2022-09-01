import { listAction, listState, listActionsTypes } from "../../types/list";

const defaultState: listState = {
    letter: 'a',
    error: null,
    all: [],
    list: [],
    filters: {
        alcoholic: false,
        nonAlcoholic: false,
        optionalAlcohol: false
    }
}

export const listReducer = (state = defaultState, action: listAction): listState => {
    switch (action.type) {
        case listActionsTypes.CHANGE_LETTER:
            return {
                error: null,
                letter: action.payload,
                list: state.list,
                all: state.all,
                filters: state.filters,
            }
        case listActionsTypes.CHANGE_LIST:
            return {
                error: null,
                list: state.all.filter(card =>
                    card.strDrink.charAt(0) === state.letter.toUpperCase()),
                letter: state.letter,
                all: state.all,
                filters:
                {alcoholic: false, nonAlcoholic: false, optionalAlcohol: false},
            }
        case listActionsTypes.SET_ALCHOLIC:
            return {
                error: null, list: state.all.filter(card =>
                    card.strDrink.charAt(0) === state.letter.toUpperCase()).filter(card =>
                        card.strAlcoholic === "Alcoholic"),
                letter: state.letter,
                all: state.all, filters:
                {alcoholic:true, nonAlcoholic:false, optionalAlcohol: false},
            }
        case listActionsTypes.SET_NON_ALCOHOLIC:
            return {
                error: null,
                list: state.all.filter(card =>
                    card.strDrink.charAt(0) === state.letter.toUpperCase()).filter(card =>
                        card.strAlcoholic === "Non alcoholic"),
                letter: state.letter,
                all: state.all,
                filters:
                {alcoholic: false, nonAlcoholic: true, optionalAlcohol: false},
            }
        case listActionsTypes.SET_OPTIONAL_ALCOHOLIC:
            return {
                error: null,
                list: state.all.filter(card =>
                    card.strDrink.charAt(0) === state.letter.toUpperCase()).filter(card =>
                        card.strAlcoholic === "Optional alcohol"),
                letter: state.letter,
                all: state.all,
                filters:
                {alcoholic: false, nonAlcoholic: false, optionalAlcohol: true},
            }
        case listActionsTypes.SET_GLOBAL_LIST:
            return {
                error: null,
                all: [...state.all, ...action.payload],
                letter: state.letter,
                list: state.list,
                filters: state.filters,
            }
        default:
            return state;
    }
}