import { ICard } from "../../types/drinks";

export interface listState {
    allDrinks: ICard[];
    allIngredients: string[];
}

export enum globalActionTypes {
    SET_GLOBAL_DRINKS = 'SET_GLOBAL_DRINKS',
    SET_GLOBAL_INGREDIENTS = 'SET_GLOBAL_INGREDIENTS',
    SET_PAGE = 'SET_PAGE'
}

interface setGlobalDrinks {
    type: globalActionTypes.SET_GLOBAL_DRINKS;
    payload: ICard[];
}

interface setGlobalIngredients {
    type: globalActionTypes.SET_GLOBAL_INGREDIENTS;
    payload: string[];
}


export type globalAction = setGlobalDrinks | setGlobalIngredients;