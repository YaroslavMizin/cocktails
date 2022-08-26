import React from 'react';
import LettersPagination from '../UI/LettersPagination/LettersPagination';
import css from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={css.footer}>
            <LettersPagination></LettersPagination>
        </div>
    );
};

export default Footer;