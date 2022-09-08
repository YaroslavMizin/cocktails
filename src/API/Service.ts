import axios from "axios";
import { ICardList } from "../types/drinks";

const root = 'https://www.thecocktaildb.com/api/json/v1/1/';
const search = 'search.php';
const filter = 'filter.php';
const lookup = 'lookup.php';

export default class Service {
    static async getListByLetter (letter: string | undefined) {
        const response = await axios.get<ICardList>(root+search, {
            params: {
                f: letter
            }
        });
        return response.data.drinks;
    }
    static async getCoctailByName (name: any) {
        const response = await axios.get<ICardList>(root+search, {
            params: {
                s: name
            }
        });
        return response.data.drinks[0];
    }
    static async getIngredientByName (ingredient: any) {
        const response = await axios.get(root+search, {
            params: {
                i: ingredient
            }
        });
        return response.data.ingredients[0];
    }
    static async getIngredientById (id: any) {
        const response = await axios.get(root+lookup, {
            params: {
                iid: id
            }
        });
        return response.data.ingredients[0];
    }
    static async getCoctailsByIngredient (ingredient: any) {
        const response = await axios.get(root+filter, {
            params: {
                i: ingredient
            }
        });
        return response.data.drinks;
    }
}