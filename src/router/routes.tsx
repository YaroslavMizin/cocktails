import { RouteObject } from "react-router-dom";
import Home from '../pages/Home/Home';
import DrinkDetail from "../pages/DrinkDetail/DrinkDetail";
import IngredientDetail from '../pages/IngredientDetail/IngredientDetail';
import Drinks from '../pages/Drinks/Drinks';
import About from '../pages/About/About';
import Ingredients from '../pages/Ingredients/Ingredients';

export const publicRoutes: RouteObject[] = [
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '/drinks/list/:letter', element: <Drinks/>},
    {path: '/ingredients/list/:letter', element: <Ingredients/>},
    {path: '/drinks/:name', element: <DrinkDetail/>},
    {path: '/ingredients/:name', element: <IngredientDetail/>},
]