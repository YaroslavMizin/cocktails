import { FC, memo, ReactNode } from 'react';
import css from './List.module.css';
import Loader from '../UI/Loader/Loader';
import { NavLink } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypeSelector';

interface ListProps {
    children: ReactNode[];
    type?: string;
    title?: string;
}

const List: FC<ListProps> = memo(({ children, type, title }) => {
    const { loading } = useTypedSelector(state => state);

    return (
        <div className={css.container}>
            {loading ? <Loader />
                :
                <>
                    <NavLink
                        className={css.title}
                        to={`/${type}/list/a`}>{title}</NavLink>
                    <div className={css.list}>
                        {children.length ?
                            children
                            :
                            <h1 className={css.not_found}>Nothing was found</h1>}
                    </div>
                </>
            }
        </div>
    );
});

export default List;