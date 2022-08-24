import css from './Input.module.css';
import React, {FC} from 'react';

interface InputProps {
    placeholder?: string;
    onChange?: React.FormEventHandler<HTMLInputElement>
}

const Input:FC<InputProps> = ({placeholder, onChange}) => {
    return (
        <div className={css.container}>
            <input
            placeholder = {placeholder}
            className={css.input}
            onChange={(e) => onChange?(e.target.value) : null}>
            </input>
        </div>

    );
};

export default Input;