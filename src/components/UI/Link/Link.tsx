import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
import css from './Link.module.css';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

const Link: FC<NavLinkProps> = ({ to, children }) => {
    return (
        <div className={css.container}>
            <NavLink
                style={({ isActive }) => (isActive ? { color: '#00b8ff' } : {})}
                className={css.link}
                to={to}>{children}
            </NavLink>
        </div>
    );
};

export default Link;