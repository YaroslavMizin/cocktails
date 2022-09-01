import { IIngredient, listActionsTypes } from "../../types/ingredients";

export const setGlobalListAction = (list: IIngredient) => {
    return ({type: listActionsTypes.SET_GLOBAL_LIST, payload: list});
}