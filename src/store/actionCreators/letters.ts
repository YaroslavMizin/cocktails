import { CHANGE_LETTER } from "../../types/letters"


export const changeLetter = (letter: string) => {
    return ({type: CHANGE_LETTER, payload: letter});
}