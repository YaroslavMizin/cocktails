import { useDispatch } from "react-redux"
import { ingredients } from "../utils/ingregients";
import { setGlobalIngredients } from "../store/actions/global";
import { setIngredientsLIst } from "../store/actions/ingredients";
import { finishLoading, setLoading } from "../store/actions/loading";

export const useAllIngredients = (): [() => void] => {
  const dispatch = useDispatch();
  const setIngredients = async () => {
    dispatch(setGlobalIngredients(ingredients))
  }
  return [setIngredients]
}

export const useIngredients = (all: string[]): [(letter: string) => void] => {
  const dispatch = useDispatch();
  const setIngredients = async (letter: string) => {
    dispatch(setLoading())
    await Promise.all(all.filter(ingredient =>
      ingredient.charAt(0).toLocaleLowerCase() === letter))
      .then((ingredients) => dispatch(setIngredientsLIst(ingredients)))
      .then(() => dispatch(finishLoading()));
  }
  return [setIngredients]
}