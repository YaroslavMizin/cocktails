import {useEffect} from 'react';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import { lettersArray } from './utils/letters';
import { useFetchingAll } from './hooks/useFetching';
import Footer from './components/Footer/Footer';

const App = () => {

  const [fetchAllCards, error] = useFetchingAll();
  useEffect(() => {
      fetchAllCards(lettersArray);
  }, []);

  return (
    <BrowserRouter>
        <NavBar></NavBar>
        <AppRouter></AppRouter>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;