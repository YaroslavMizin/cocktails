import React, { FC, ReactNode } from 'react';
import css from './Link2.module.css';
import { NavLink } from 'react-router-dom';

interface Link2 {
    children: ReactNode;
    to: string;
}

const Link2: FC<Link2> = ({children, to}) => {
    return (
        <NavLink
        to={to}
        className={css.link2}>
            {children}
        </NavLink>  
    );
};

export default Link2;