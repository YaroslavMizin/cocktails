import { ICard } from "../types/drinks";

export const useRandomDrinks = (all: ICard[]) => {
    const RandomDrinks =  () => {
       const random = all.sort(() => 0.5 - Math.random()).slice(0, 6);
       return random;
    };
    return RandomDrinks();
}

export const useRandomIngredients = (all: ICard[]) => {
    const RandomIngredients = () => {
        const unique = new Set(all.map(card => card.strIngredient1));
        const random = Array.from(unique).sort(() => 0.5 - Math.random());
        return random.slice(0, 6);
    };
    return RandomIngredients();
}