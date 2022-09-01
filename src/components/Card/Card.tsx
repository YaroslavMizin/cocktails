import React, { FC, memo } from 'react';
import css from './Card.module.scss';
import { NavLink } from 'react-router-dom';

interface CardProps {
    title: string;
    thumb: string;
    type: string
    children?: React.ReactNode;
}

const Card: FC<CardProps> = memo(({ title, thumb, type }) => {
    return (
        <div className={css.card}>
            <NavLink
                to={`/${type}/${title}`}
                className={css.title}>
                {title}
            </NavLink>
            <NavLink
                to={`/${type}/${title}`}
                className={css.container}>
                <img
                    width='200px'
                    height='200px'
                    className={css.preview}
                    src={thumb}/>
            </NavLink>
        </div>
    );
});

export default Card;