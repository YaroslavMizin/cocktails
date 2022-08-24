export interface letterState {
    letter: string,
    error: null | string
}
export const CHANGE_LETTER = 'CHANGE_LETTER';

interface changeLetterAction {
    type: string;
    payload: string;
}

export type letterAction = changeLetterAction; 