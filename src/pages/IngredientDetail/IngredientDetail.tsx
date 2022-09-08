import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import css from './IngredientDetail.module.scss';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/Service';
import { IIngredient } from '../../types/ingredients';
import { img } from '../../utils/ingregients';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Loader from '../../components/UI/Loader/Loader';
import { ICard } from '../../types/drinks';
import Error from '../../components/Error/Error';

const IngredientDetail = () => {
    
    const params = useParams();
    const { loading } = useTypedSelector(state => state);
    const [details, setDetails] = useState<IIngredient>({} as IIngredient);
    const [drinks, setDrinks] = useState<ICard[]>([]);
    const [image, loadImage] = useState<boolean>(false);
    const [fetchItem, error] = useFetching(async () => {
        const details = await PostService.getIngredientByName(params.name);
        setDetails(details);
        const drinks = await PostService.getCoctailsByIngredient(params.name);
        setDrinks(drinks);
    });

    useEffect(() => {
        fetchItem();
        setTimeout(() => loadImage(true));
    }, [params.name]);

    return (
        <div className={css.container}>
            {loading ? <Loader />
                :
                <div className={css.content_box}>
                    <div className={css.ingredient}>
                        <h1 className={css.title}>{details.strIngredient}</h1>
                        <h3 className={css.title}>{details.strType}</h3>
                        {image? <img src={img(details.strIngredient, '-medium')} /> : <Loader/>}
                        
                        <article className={css.description}>{details.strDescription}</article>
                    </div>
                    <div className={css.ingredient}>
                        <h1 className={css.title}>Drinks:</h1>
                        <div className={css.drinks}>
                            {!drinks && <Error/> || drinks.map(drink =>
                                <div
                                key={drink.strDrink}
                                className={css.card}>
                                    <NavLink to={`/drinks/${drink.strDrink}`}
                                    className={css.link}>
                                        {drink.strDrink}
                                    </NavLink>
                                    <img
                                        alt='loading..'
                                        width='200'
                                        height='200'
                                        src={drink.strDrinkThumb} />
                                </div>)}
                        </div>
                    </div>

                </div>
            }
        </div>
    );
};

export default IngredientDetail;