import { FC, memo } from 'react';
import css from './String.module.css';

interface StringProps {
    children: string;
    active?: boolean;
    onClick: () => {};
}

const String: FC<StringProps> = memo(({ children, active, onClick }) => {
    return (
        <button
        disabled={active}
        onClick={onClick}
        className={css.container}>
            <h2 
            className={active? css.active : css.string}>
            {children}
            </h2>
        </button>
    );
});

export default String;