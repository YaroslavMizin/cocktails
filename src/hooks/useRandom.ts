import { useState } from "react";
import { useDispatch } from "react-redux";
import { finishLoading, setLoading } from "../store/actions/loading";
import { useTypedSelector } from "./useTypedSelector";
import { ICard } from "../types/drinks";

export const useRandom = (length: number): [ICard[], string[], (all: ICard[]) => void] => {
    const dispatch = useDispatch();
    const {allIngredients} = useTypedSelector(state => state.global);
    const [randomDrinks, setRandomDrinks] = useState<ICard[]>([]);
    const [randomIngredients, setRandomIngredients] = useState<string[]>([]);
    const setDrinksAndIngredients = async (all: ICard[]): Promise<void> => {
        const ingredients = new Promise<string[]>(res => {
            if(allIngredients.length) {
                res(allIngredients.sort(() =>
                0.5 - Math.random()).slice(0, length))
            }});
        const drinks = new Promise<ICard[]>(res =>
            res(all.sort(() => 0.5 - Math.random()).slice(0, length)));
        dispatch(setLoading());
        await ingredients.then(ingredients => setRandomIngredients(ingredients));
        await drinks.then(drinks => setRandomDrinks(drinks));
        if (randomDrinks.length && randomIngredients.length) {
            setTimeout(() => dispatch(finishLoading()), 500);
        }
    };
    return [randomDrinks, randomIngredients, setDrinksAndIngredients];
}