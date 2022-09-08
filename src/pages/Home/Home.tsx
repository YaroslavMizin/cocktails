import { memo, useEffect, useState } from 'react';
import css from './Home.module.scss';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import { img} from '../../utils/ingregients';
import { useRandom } from '../../hooks/useRandom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../../components/UI/Loader/Loader';
import Footer from '../../components/Footer/Footer';

const Home = memo(() => {
    const { loading, global: {allDrinks} } = useTypedSelector(state => state);
    const [page, setPage] = useState(false);
    const [drinks, ingredients, setDrinks] = useRandom(6);

    useEffect(() => {
        setPage(true);
        setDrinks(allDrinks);
    }, [page, allDrinks]);

    return (
        <>
            <main className={css.main}>
                {loading? <Loader />
                    :
                    <div className={css.container}>
                        <List
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
                        </List>
                        <List
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
                        </List>
                    </div>
                }
            </main>
            <Footer></Footer>
        </>
    );
});

export default Home;