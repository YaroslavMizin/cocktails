import React, { FC } from 'react';
import css from './Loader.module.css'

const Loader: FC = () => {
    return (
        <div className={css.box}>
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