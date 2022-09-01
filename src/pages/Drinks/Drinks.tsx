import { useEffect } from 'react';
import css from './Drinks.module.scss';
import List from '../../components/List/List';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import LettersPagination from '../../components/UI/LettersPagination/LettersPagination';
import Aside from '../../components/Aside/Aside';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLetter, changeList } from '../../store/actionCreators/list';
import { finishLoading, setLoading } from '../../store/actionCreators/loading';

const Drinks = () => {
    const { loading, letterlist: { list } } = useTypedSelector(state => state);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(setLoading());
        dispatch(changeLetter(params.letter));
        dispatch(changeList());
        dispatch(finishLoading());
    }, [params.letter]);

    return (
        <>
            <div className={css.main}>
                <Aside></Aside>
                <List
                type='drinks'
                title={`Current:  ${params.letter}`}>
                    {list.map(card =>
                        <Card
                            key={card.strDrink}
                            type='drinks'
                            title={card.strDrink}
                            thumb={card.strDrinkThumb}>
                        </Card>)}
                </List>
            </div>
            <Footer>
                <LettersPagination></LettersPagination>
            </Footer>
        </>
    );
};

export default Drinks;