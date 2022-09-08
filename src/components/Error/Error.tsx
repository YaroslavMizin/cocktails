import React from 'react';
import css from './Error.module.scss'

const Error = () => {
    return (
        <div>
            <h1 className={css.error}>Something went wrong: 404</h1>
        </div>
    );
};

export default Error;