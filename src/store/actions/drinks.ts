import { ICard } from "../../types/drinks";
import { listActionsTypes } from "../types/drinks"

export const changeList = (list: ICard[]) => {
    return ({type: listActionsTypes.CHANGE_LIST, payload: list});
}

export const setDrinksPage = (page: string) => {
    return ({type: listActionsTypes.SET_DRINKS_PAGE, payload: page})
}