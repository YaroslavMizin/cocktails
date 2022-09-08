import { ICard } from "../../types/drinks";
import { globalActionTypes } from "../types/global";

export const setGlobalDrinks = (list: ICard[]) => {
    return ({type: globalActionTypes.SET_GLOBAL_DRINKS, payload: list})
}

export const setGlobalIngredients = (list: string[]) => {
    return ({type: globalActionTypes.SET_GLOBAL_INGREDIENTS, payload: list})
}