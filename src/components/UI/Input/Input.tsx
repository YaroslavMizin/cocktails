import css from './Input.module.css';
import React, { FC } from 'react';


interface InputProps {
    placeholder: string;
    onChange: React.FormEventHandler<HTMLInputElement>;
    onKeyDown?: React.FormEventHandler<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<EventTarget>
    value: string;
    style?: {}
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ placeholder, value, style, onKeyUp, onKeyDown, onChange }, ref) => {

    return (
        <div
            style={style}
            className={css.container}>
            <input
                ref={ref}
                value={value}
                placeholder={placeholder}
                className={css.input}
                onKeyUp={onKeyUp}
                onKeyDown={onKeyDown}
                onChange={onChange}>
            </input>
        </div>
    );
});

export default Input;