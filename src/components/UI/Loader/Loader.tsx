import React, { FC } from 'react';
import css from './Loader.module.css';

interface LoaderProps {
    style?: any;
}

const Loader: FC<LoaderProps> = ({style}) => {
    return (
        <div style={style}>
            <div className={css.container}>
                <div className={css.loader}>
                </div>
                <div className={css.pointer_1}></div>
                <div className={css.pointer_2}></div>
            </div>
        </div>
    );
};

export default Loader;