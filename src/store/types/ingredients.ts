export interface listState {
    page: string,
    error: null | string,
    list: string[],
    filters: {
        
    }
}

export enum listActionsTypes {
    CHANGE_INGREDIENTS = 'CHANGE_INGREDIENTS',
    SET_INGREDIENTS_PAGE = 'SET_INGREDIENTS_PAGE',
}

interface changeIngredientsAction {
    type: listActionsTypes.CHANGE_INGREDIENTS;
    payload: string[];
}

interface changeIngredientsPageAction {
    type: listActionsTypes.SET_INGREDIENTS_PAGE;
    payload: string;
}

export type listAction = changeIngredientsAction | changeIngredientsPageAction;