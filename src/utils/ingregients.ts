import { ICard } from "../types/drinks";

export const img = (ingredient: string) => {
    return `https://www.thecocktaildb.com/images/ingredients/${ingredient}-small.png`
}

export const setImages = (images: string[], ingredients: ICard) => {
    Object.entries(ingredients).filter(entry =>
        entry[0].includes('strIngredient')).filter(entry =>
            entry[1] !== null).forEach(entry =>
                images.push(entry[1]));
}

export const setMeasures = (measures: string[], ingredients: ICard) => {
    Object.entries(ingredients).filter(entry =>
        entry[0].includes('strMeasure')).filter(entry =>
            entry[1] !== null).forEach(entry =>
                measures.push(entry[1]));
}