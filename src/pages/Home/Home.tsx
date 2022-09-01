import { memo, useState } from 'react';
import css from './Home.module.css';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import { img } from '../../utils/ingregients';
import { useRandomDrinks, useRandomIngredients } from '../../hooks/useRandom';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import Loader from '../../components/UI/Loader/Loader';
import Footer from '../../components/Footer/Footer';

const Home = memo(() => {
    const { loading, letterlist: { all } } = useTypedSelector(state => state);
    const [load, setLoaded] = useState(false);
    const drinks = useRandomDrinks(all);
    const ingredients = useRandomIngredients(all);

    setTimeout(() => setLoaded(true), 800);

    return (
        <>
            <main className={css.main}>
                {loading ? <Loader />
                    :
                    <div className={css.container}>
                        {load ? <List
                            title='drinks'
                            type='drinks'>
                            {drinks.map(item =>
                                <Card
                                    type='drinks'
                                    key={item.idDrink}
                                    title={item.strDrink}
                                    thumb={item.strDrinkThumb}>
                                </Card>)
                            }
                        </List> : <Loader />}
                        {load && <List
                            title='ingredients'
                            type='ingredients'>
                            {ingredients.map(item =>
                                <Card
                                    type='ingredients'
                                    key={item}
                                    title={item}
                                    thumb={img(item, '-medium')}>
                                </Card>)
                            }
                        </List>}
                    </div>
                }
            </main>
            <Footer></Footer>
        </>
    );
});

export default Home;