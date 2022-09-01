import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import css from './IngredientDetail.module.scss';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/Service';
import { IIngredient } from '../../types/ingredients';
import { Ingredient } from '../../utils/ingregients';
import { img } from '../../utils/ingregients';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import Loader from '../../components/UI/Loader/Loader';
import { ICard } from '../../types/drinks';

const IngredientDetail = () => {
    
    const params = useParams();
    const { loading } = useTypedSelector(state => state);
    const [details, setDetails] = useState<IIngredient>(Ingredient);
    const [drinks, setDrinks] = useState<ICard[]>([]);
    const [image, loadImage] = useState<boolean>(false);
    const [fetchItem] = useFetching(async () => {
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
                            {drinks.map(drink =>
                                <div
                                key={drink.strDrink}
                                className={css.card}>
                                    <NavLink to={`/drinks/${drink.strDrink}`}
                                    className={css.link}>
                                        {drink.strDrink}
                                    </NavLink>
                                    <img
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