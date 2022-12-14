export interface ICard {
    dateModified: null | string
    idDrink: string
    strAlcoholic: null | string
    strCategory: null | string
    strCreativeCommonsConfirmed: null | string
    strDrink: string
    strDrinkAlternate: null | string
    strDrinkThumb: string
    strGlass: null | string
    strIBA: null | string
    strImageAttribution: null | string
    strImageSource: null | string
    strIngredient1: string
    strIngredient2: string
    strIngredient3: null | string
    strIngredient4: null | string
    strIngredient5: null | string
    strIngredient6: null | string
    strIngredient7: null | string
    strIngredient8: null | string
    strIngredient9: null | string
    strIngredient10: null | string
    strIngredient11: null | string
    strIngredient12: null | string
    strIngredient13: null | string
    strIngredient14: null | string
    strIngredient15: null | string
    strInstructions: string
    strMeasure1: null | string
    strMeasure2: null | string
    strMeasure3: null | string
    strMeasure4: null | string
    strMeasure5: null | string
    strMeasure6: null | string
    strMeasure7: null | string
    strMeasure8: null | string
    strMeasure9: null | string
    strMeasure10: null | string
    strMeasure11: null | string
    strMeasure12: null | string
    strMeasure13: null | string
    strMeasure14: null | string
    strMeasure15: null | string
    strTags: null | string
    strVideo: null | string
}

export interface ICardList {
    drinks: ICard[];
}

interface setDetails {
    type: string;
    payload: ICard;
}

export type detailsAction = setDetails;

export const SET_DETAILS = "SET_DETAILS";