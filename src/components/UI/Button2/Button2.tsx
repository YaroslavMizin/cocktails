import React, {FC, memo} from 'react';
import css from './Button2.module.css';

interface Button2Props {
    children: React.ReactNode;
    onClick: (e: any) => void;
    current?: string;
}

const Button2: FC<Button2Props> = memo(({onClick, children, current}) => {
    return (
        <button
        className={current === children? css.active : css.button}
        onClick={onClick}>
            {children}
        </button>
    );
});

export default Button2;