import { detailsAction, ICard, SET_DETAILS } from "../../types/drinks";
import { Card } from "../../utils/drinks";

const defaultState: ICard = Card;

export const detailsReducer = (state = defaultState, action: detailsAction): ICard => {
    switch (action.type) {
        case SET_DETAILS:
            return state = action.payload;
        default:
            return state;
    }
}