export interface IIngredient {
    idIngredient: string
    strIngredient: string
    strDescription: string
    strType: string
    strAlcohol: string | null
    strABV: string | null
}

export interface listState {
    letter: string,
    error: null | string,
    all: IIngredient[],
    list: IIngredient[],
}

export enum listActionsTypes {
    SET_GLOBAL_LIST = 'SET_GLOBAL_LIST',
    SET_INGREDIENTS_LIST  = 'SET_INGREDIENTS_LIST',
}

interface setGlobalListAction {
    type: listActionsTypes.SET_GLOBAL_LIST;
    payload: IIngredient;
}

export type listAction = setGlobalListAction;