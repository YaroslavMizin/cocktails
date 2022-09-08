import { useEffect } from 'react';
import { useFetchingAll } from './hooks/useFetching';
import { BrowserRouter } from 'react-router-dom';
import { lettersArray } from './utils/letters';
import NavBar from './components/NavBar/NavBar';
import AppRouter from './components/AppRouter/AppRouter';
import { useAllIngredients } from './hooks/useIngredients';

const App = () => {
  const [setIngredients] = useAllIngredients();
  const [fetchAllCards] = useFetchingAll();
  
  useEffect(() => {
    fetchAllCards(lettersArray);
    setIngredients();
  }, []);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;