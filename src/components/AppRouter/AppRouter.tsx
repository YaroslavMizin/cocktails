import { Route, Routes } from 'react-router-dom';
import DrinkDetail from '../../pages/DrinkDetail/DrinkDetail';
import Home from '../../pages/Home/Home';
import { publicRoutes } from '../../router/routes';

const AppRouter = () => {
    return (
        <Routes>
            {/* {publicRoutes.map(route => <Route path={route.path} element={route.component()}/>)} */}
            <Route path='/' element={<Home/>}/>
            <Route path='/drinks/:id' element={<DrinkDetail/>}/>
        </Routes>
    );
};

export default AppRouter;