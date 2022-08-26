import { ICard } from "../../types/drinks";
import { listActionsTypes } from "../../types/list"


export const changeLetter = (letter: string) => {
    return ({type: listActionsTypes.CHANGE_LETTER, payload: letter});
}

export const changeList = () => {
    return ({type: listActionsTypes.CHANGE_LIST});
}

export const setGlobalList = (list: ICard[]) => {
    return ({type: listActionsTypes.SET_GLOBAL_LIST, payload: list});
}

export const setAlcoholic = () => {
    return ({type: listActionsTypes.SET_ALCHOLIC})
}

export const setNonAlcoholic = () => {
    return ({type: listActionsTypes.SET_NON_ALCOHOLIC})
}

export const setOptionalAlcoholic = () => {
    return ({type: listActionsTypes.SET_OPTIONAL_ALCOHOLIC})
}