import { ICard } from "../../types/drinks";

export interface listState {
    error: null | string,
    list: ICard[],
    page: string,
}

export enum listActionsTypes {
    CHANGE_LIST = 'CHANGE_LIST',
    SET_DRINKS_PAGE = 'SET_DRINKS_PAGE',
}

interface changeListAction {
    type: listActionsTypes.CHANGE_LIST;
    payload: ICard[];
}

interface setDrinksPageAction {
    type: listActionsTypes.SET_DRINKS_PAGE;
    payload: string;
}

export type listAction = changeListAction | setDrinksPageAction;