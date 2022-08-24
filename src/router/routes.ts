import React, {FC} from "react";
import DrinkDetail from "../pages/DrinkDetail/DrinkDetail";
import Home from '../pages/Home/Home'

interface publicRoutes {
    path: string,
    component: React.FC,
    exact: boolean,
}

export const publicRoutes = [
    {path: '/', component: Home},
    // {path: '/drinks/:id', component: DrinkDetail}
]