import { globalAction, globalActionTypes, listState } from "../types/global"

const defaultState: listState = {
    allDrinks: [],
    allIngredients: [],
}

export const globalReducer = (state = defaultState, action: globalAction): listState => {
    switch(action.type) {
        case globalActionTypes.SET_GLOBAL_DRINKS:
            return {
                allDrinks: [...state.allDrinks, ...action.payload],
                allIngredients: state.allIngredients
            }
        case globalActionTypes.SET_GLOBAL_INGREDIENTS:
            return {
                allDrinks: state.allDrinks,
                allIngredients: action.payload}
        default:
            return state;
    }
}