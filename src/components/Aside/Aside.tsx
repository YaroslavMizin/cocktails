import { FC, memo, ReactNode } from 'react';
import css from './Aside.module.scss';

interface AsideProps {
    children?: ReactNode | ReactNode[];
}

const Aside: FC<AsideProps> = memo(({ children }) => {

    return (
        <aside className={css.aside}>
            <div className={css.container}>
                {children}
            </div>
        </aside>
    );
});

export default Aside;