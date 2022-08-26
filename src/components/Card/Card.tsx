import React, { FC } from 'react';
import css from './Card.module.scss';
import { NavLink } from 'react-router-dom';
import { ICard } from '../../types/drinks';

interface CardProps {
    drink: ICard;
    children?: React.ReactNode;
}

const Card: FC<CardProps> = ({ drink }) => {
    return (
        <div className={css.card}>
            <NavLink
                to={`/drinks/${drink.idDrink}`}
                className={css.title}>
                {drink.strDrink}
            </NavLink>
            <NavLink
                to={`/drinks/${drink.idDrink}`}
                className={css.container}>
                <img
                    width='200px'
                    height='200px'
                    className={css.preview}
                    src={drink.strDrinkThumb + '/preview'}/>
            </NavLink>
        </div>
    );
};

export default Card;