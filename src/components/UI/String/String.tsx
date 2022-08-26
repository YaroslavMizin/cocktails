import { FC } from 'react';
import css from './String.module.css'

interface StringProps {
    children: string;
    onClick: () => {}
}

const String: FC<StringProps> = ({ children, onClick }) => {
    return (
        <h3 
            className={css.string}
            onClick={onClick}>
            {children}
        </h3>
    );
};

export default String;