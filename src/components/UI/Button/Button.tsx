import React, {FC} from "react";
import css from './Button.module.css';

interface ButtonProps {
    children?: React.ReactNode,
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {

    return (
        <button
            onClick={onClick}
            className={css.button}>
            {children}
        </button>
    )
}