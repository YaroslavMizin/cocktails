import React, { FC, memo, useState } from 'react';
import { Button } from '../UI/Button/Button';
import css from './Filter.module.scss';

interface FilterProps {
    children: React.ReactNode | React.ReactNode[];
    type: string;
}

const Filter: FC<FilterProps> = memo(({ children, type }) => {

    const [fold, setFold] = useState<boolean>(false);
    const unFold = (state: boolean) => {
        state ? setFold(false) : setFold(true);
    }

    return (
        <div
            className={css.filter}>
            <Button onClick={() => unFold(fold)}>{type}</Button>
            <div className={css.container}>
            {fold ? children : null}
            </div>
        </div>
    );
});

export default Filter;