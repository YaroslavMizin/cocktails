import { ICard, SET_DETAILS } from "../../types/drinks";

export const setDetails = (details: ICard) => {
    return ({type: SET_DETAILS, payload: details});
}