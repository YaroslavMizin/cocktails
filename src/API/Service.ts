import axios from "axios";
import { ICardList } from "../types/drinks";

const root = 'https://www.thecocktaildb.com/api/json/v1/1/';
const showListByLetter = 'search.php?f=';
const searchIngredientByName = 'search.php?i=';
const filterByIngredient = 'filter.php?i=';
const lookupCocktailById = 'lookup.php?i=';
const lookupIngredientById = 'lookup.php?iid=';

export default class Service {
    static async getListByLetter (letter: string) {
        const response = await axios.get<ICardList>(root+showListByLetter+letter);
        return response;
    }
    static async getItemById (id: any) {
        const response = await axios.get(root+lookupCocktailById+id);
        return response.data.drinks;
    }
    // static async getIngredientByName (ingredient) {
    //     const response = await axios.get(root+searchIngredientByName+ingredient);
    //     return response.data.ingredients;
    // }
    // static async getCoctailsByIngredient (ingredient) {
    //     const response = await axios.get(root+filterByIngredient+ingredient);
    // }
}