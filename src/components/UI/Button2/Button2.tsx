import React, {FC} from 'react';
import css from './Button2.module.css';
import {useTypedSelector} from '../../../hooks/useTypeSelector';

interface Button2Props {
    children: React.ReactNode;
    onClick: (e: any) => void;
}

const Button2: FC<Button2Props> = ({onClick, children}) => {
const {letter} = useTypedSelector(state => state.letterlist)
    return (
        <button
        className={letter === children? css.active : css.button}
        onClick={onClick}>
            {children}
        </button>
    );
};

export default Button2;