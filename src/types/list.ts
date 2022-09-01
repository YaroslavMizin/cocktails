import { ICard } from "./drinks";

export interface listState {
    letter: string,
    error: null | string,
    all: ICard[],
    list: ICard[],
    filters: {
        alcoholic: boolean,
        nonAlcoholic: boolean,
        optionalAlcohol: boolean,
    }
}

export enum listActionsTypes {
    CHANGE_LETTER = 'CHANGE_LETTER',
    CHANGE_LIST = 'CHANGE_LIST',
    SET_ALCHOLIC = 'SET_ALCOHOLIC',
    SET_NON_ALCOHOLIC = 'SET_NON_ALCOHOLIC',
    UNSET_ALCOHOLIC = 'UNSET_ALCOHOLIC',
    UNSET_NON_ALCOHOLIC = 'UNSET_NON_ALCOHOLIC',
    SET_GLOBAL_LIST = 'SET_GLOBAL_LIST',
    SET_OPTIONAL_ALCOHOLIC = 'SET_OPTIONAL_ALCOHOLIC'
}

interface changeLetterAction {
    type: listActionsTypes.CHANGE_LETTER;
    payload: string;
}

interface changeListAction {
    type: listActionsTypes.CHANGE_LIST;
}

interface setAlcoholicAction {
    type: listActionsTypes.SET_ALCHOLIC;
    paylod: ICard[];
}

interface setNonAlcoholicAction {
    type: listActionsTypes.SET_NON_ALCOHOLIC;
    paylod: ICard[];
}

interface setGlobalListAction {
    type: listActionsTypes.SET_GLOBAL_LIST;
    payload: ICard[];
}

interface setOptionalAlcoholicAction {
    type: listActionsTypes.SET_OPTIONAL_ALCOHOLIC;
    payload: ICard[];
}

export type listAction = changeLetterAction | changeListAction | setAlcoholicAction
| setNonAlcoholicAction | setGlobalListAction | setOptionalAlcoholicAction; 