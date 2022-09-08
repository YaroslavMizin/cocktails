import { listActionsTypes } from "../types/ingredients"


export const setIngredientsLIst = (list: string[]) => {
    return {type: listActionsTypes.CHANGE_INGREDIENTS, payload: list}
}

export const setIngredientsPage = (page: string) => {
    return {type: listActionsTypes.SET_INGREDIENTS_PAGE, payload: page}
}