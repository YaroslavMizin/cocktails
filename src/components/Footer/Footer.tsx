import { ReactNode, FC } from 'react';
import LettersPagination from '../UI/LettersPagination/LettersPagination';
import css from './Footer.module.scss';

interface FooterProps {
    children?: ReactNode;
}

const Footer: FC<FooterProps> = ({ children }) => {
    return (
        <div className={css.footer}>
            {children}
        </div>
    );
};

export default Footer;