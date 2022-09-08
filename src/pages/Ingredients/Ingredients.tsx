import { useEffect } from 'react';
import css from './Ingredients.module.scss';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import LettersPagination from '../../components/UI/LettersPagination/LettersPagination';
import { useIngredients } from '../../hooks/useIngredients';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { img } from '../../utils/ingregients';
import Loader from '../../components/UI/Loader/Loader';
import { useDispatch } from 'react-redux';
import { setIngredientsPage } from '../../store/actions/ingredients';

const Ingredients = () => {
    const dispatch = useDispatch();
    const { global: { allIngredients }, ingredients: { list, page }, loading } = useTypedSelector(state => state)
    const params = useParams<{ letter: string }>() as { letter: string };
    const current = params.letter;
    const [setIngredients] = useIngredients(allIngredients);

    useEffect(() => {
        dispatch(setIngredientsPage(current));
        setIngredients(current);
    }, [current, allIngredients]);

    return (
        <>
            <div className={css.container}>
                {loading ? <Loader />
                    :
                    <List title={page} type='ingredients'>
                        {list && list.map(ingredient =>
                            <Card
                                key={ingredient}
                                type={'ingredients'}
                                title={ingredient}
                                thumb={img(ingredient, '-medium')}>

                            </Card>)}
                    </List>
                }
            </div>
            <Footer>
                <LettersPagination current={current} type='ingredients' />
            </Footer>
        </>
    );
};

export default Ingredients;