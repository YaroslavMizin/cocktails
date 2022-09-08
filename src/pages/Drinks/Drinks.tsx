import { useEffect } from 'react';
import css from './Drinks.module.scss';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import LettersPagination from '../../components/UI/LettersPagination/LettersPagination';
import Aside from '../../components/Aside/Aside';
import Filter from '../../components/Filter/Filter';
import String from '../../components/UI/String/String';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeList, setDrinksPage } from '../../store/actions/drinks';
import { useFetching } from '../../hooks/useFetching';
import Service from '../../API/Service';
import Loader from '../../components/UI/Loader/Loader';
import { useFilter } from '../../hooks/useFilter';
import { options } from '../../utils/options';

const Drinks = () => {
    const dispatch = useDispatch();
    const params = useParams<{ letter: string }>() as { letter: string };
    const { drinks: { list, page }, loading } = useTypedSelector(state => state);
    const [drinksList, option, setList] = useFilter(list);
    const [fetchDrinks, error] = useFetching(async () => {
        dispatch(setDrinksPage(params.letter))
        const response = await Service.getListByLetter(params.letter);
        dispatch(changeList(response));
    });

    useEffect(() => {
        setList('All');
    }, [list]);

    useEffect(() => {
        fetchDrinks();
    }, [params.letter]);

    return (
        <>
            <div className={css.main}>
                <Aside>
                    {options.map(op =>
                    <Filter
                    key={op.name}
                    type={op.name}>
                        {op.options.map(op => 
                        <String
                        key={op}
                        active={op === option}
                        onClick={async () => setList(op)}>
                            {op}
                        </String>)}
                    </Filter>)}
                </Aside>
                {loading ? <Loader />
                    :
                    <List
                        type='drinks'
                        title={`${page}`}>
                        {drinksList && drinksList.map(card =>
                            <Card
                                key={card.strDrink}
                                type='drinks'
                                title={card.strDrink}
                                thumb={card.strDrinkThumb}>
                            </Card>)}
                    </List>
                }
            </div>
            <Footer>
                <LettersPagination
                current={params.letter}
                type='drinks' />
            </Footer>
        </>
    );
};

export default Drinks;