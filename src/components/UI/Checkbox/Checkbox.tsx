import React, { FC } from 'react';
import css from './Checkbox.module.css';

interface CheckboxProps {
    onChange?: () => void;
    children: React.ReactNode;
}

const Checkbox: FC<CheckboxProps> = ({ onChange, children }) => {
    return (
        <>
            <label>
                <input
                    onChange={onChange}
                    id='1'
                    className={css.checkbox}
                    type='checkbox'/>
                <span className={css.children}>{children}</span>
            </label>
        </>

    );
};

export default Checkbox;