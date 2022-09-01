import { useMemo } from "react";
import { ICard } from "../types/drinks";

export const useFilter = (query: string, all: ICard[]) => {
    const useFilteredDrinks = () => useMemo(() => {
        return all.filter(drink =>
            drink.strDrink.toLowerCase().includes(query.toLocaleLowerCase())).sort((a, b) => a.strDrink.localeCompare(b.strDrink));
    }, [query]);
    return useFilteredDrinks();
}