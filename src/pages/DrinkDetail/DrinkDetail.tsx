import React, { useEffect, useState } from 'react';
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

const DrinkDetail = () => {

    const { loading } = useTypedSelector(state => state.loading);
    const [desciption, setDescription] = useState<ICard>(Card);
    const params = useParams();
    const [fetchItem, error] = useFetching(async () => {
        const response: ICard[] = await PostService.getItemById(params.id);
        setDescription(response[0]);
    });

    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <div className={css.container}>
            {loading ? <Loader /> :
                <div className={css.content_box}>
                    <div className={css.image}>
                        <h2 className={css.title}>
                            {desciption.strDrink}
                        </h2>
                        <img
                            width='400px'
                            height='400px'
                            src={desciption.strDrinkThumb} />
                        <div className={css.tags}>
                            <Link2 to='/'>{desciption.strAlcoholic}</Link2>
                            <Link2 to='/'>{desciption.strCategory}</Link2>
                            <Link2 to='/'>{desciption.strDrinkAlternate}</Link2>
                            <Link2 to='/'>{desciption.strGlass}</Link2>
                            <Link2 to='/'>{desciption.strIBA}</Link2>
                        </div>
                    </div>
                    <div className={css.description}>
                            <h3 className={css.title}>Ingredients</h3>
                            {/* <div className={css.ingredients}>
                               <Ingredients ingredients={desciption}></Ingredients>   
                            </div> */}
                    </div>
                </div>
            }
        </div>
    );
};

export default DrinkDetail;