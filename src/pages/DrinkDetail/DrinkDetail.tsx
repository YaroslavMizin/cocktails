import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './DrinkDetail.module.scss';
import { useParams } from 'react-router-dom';
import { useFetching } from '../../hooks/useFetching';
import PostService from '../../API/Service'
import { useTypedSelector } from '../../hooks/useTypeSelector';
import Loader from '../../components/UI/Loader/Loader';
import { ICard } from '../../types/drinks';
import { Card } from '../../utils/drinks';
import Link2 from '../../components/UI/Link2/Link2';
import Ingredients from '../../components/UI/Ingredients/Ingredients';
import { setDetails } from '../../store/actionCreators/details';

const DrinkDetail = () => {
    const dispatch = useDispatch();
    const { loading, details } = useTypedSelector(state => state);
    const params = useParams();
    const [fetchItem, error] = useFetching(async () => {
        const response: ICard[] = await PostService.getItemById(params.id);
        dispatch(setDetails(response[0]))
    });

    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <div className={css.container}>
            {loading ? <Loader style={{ marginTop: '140px' }} /> :
                <div className={css.content_box}>
                    <div className={css.image}>
                        <h2 className={css.title}>
                            {details.strDrink}
                        </h2>
                        <img
                            className={css.image}
                            width='400px'
                            height='400px'
                            src={details.strDrinkThumb}
                            alt={details.strDrink} />
                        <h3 className={css.title}>Tags:</h3>
                        <div className={css.tags}>
                            <Link2 to='/'>{details.strAlcoholic}</Link2>
                            <Link2 to='/'>{details.strCategory}</Link2>
                            <Link2 to='/'>{details.strDrinkAlternate}</Link2>
                            <Link2 to='/'>{details.strGlass}</Link2>
                            <Link2 to='/'>{details.strIBA}</Link2>
                        </div>
                    </div>
                    <div className={css.description}>
                        <h3 className={css.title}>Ingredients:</h3>
                        <div className={css.ingredients}>
                            <Ingredients ingredients={details}></Ingredients>
                        </div>
                        <div>
                            <h3 className={css.title}>Instructions:</h3>
                            <article className={css.title}>{details.strInstructions}</article>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default DrinkDetail;