import Home from '../pages/Home/Home';
import DrinkDetail from "../pages/DrinkDetail/DrinkDetail";
import IngredientDetail from '../pages/IngredientDetail/IngredientDetail';
import { Navigate, RouteObject } from "react-router-dom";
import Drinks from '../pages/Drinks/Drinks';
import About from '../pages/About/About';

export const publicRoutes: RouteObject[] = [
    {path: '/', element: <Home/>},
    {path: '/about', element: <About/>},
    {path: '/drinks/list/:letter', element: <Drinks/>},
    {path: '/drinks/:name', element: <DrinkDetail/>},
    {path: '/ingredients/:name', element: <IngredientDetail/>},
]