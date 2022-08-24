import React, {FC} from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;