import { FC, memo, ReactNode } from 'react';
import css from './List.module.css';
import { NavLink } from 'react-router-dom';
import { next } from '../../utils/letters';

interface ListProps {
    children?: ReactNode[];
    type?: string;
    title?: string;
}

const List: FC<ListProps> = memo(({ children, type, title }) => {

    return (
        <div className={css.container}>
            <NavLink
                className={css.title}
                to={`/${type}/list/${next(title)}`}>{title}</NavLink>
            <div className={css.list}>
                {children?.length ?
                    children
                    :
                    <h1 className={css.not_found}>Nothing was found</h1>}
            </div>
        </div>
    );
});

export default List;