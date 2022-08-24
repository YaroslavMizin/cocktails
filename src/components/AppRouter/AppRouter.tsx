import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DrinkDetail from '../../pages/DrinkDetail/DrinkDetail';
import { publicRoutes } from '../../router/routes';

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    element={route.component()}
                    path={route.path}
                    />
            )}
            <Route path='/drinks/:id' element={<DrinkDetail/>}/>
        </Routes>
    );
};

export default AppRouter;