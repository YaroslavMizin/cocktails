import React, {FC} from "react";
import css from './Button.module.css';

interface ButtonProps {
    children?: React.ReactNode,
    style?: {}
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick, style }) => {

    return (
        <button
            style={style}
            onClick={onClick}
            className={css.button}>
            {children}
        </button>
    )
}