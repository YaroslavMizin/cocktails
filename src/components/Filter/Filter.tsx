import React, { FC, useState } from 'react';
import { Button } from '../UI/Button/Button';
import css from './Filter.module.scss';

interface FilterProps {
    children: React.ReactNode | React.ReactNode[];
}

const Filter: FC<FilterProps> = ({ children }) => {

    const [fold, setFold] = useState<boolean>(false);

    const unFold = (state: boolean) => {
        state ? setFold(false) : setFold(true);
    }

    return (
        <div
            className={css.filter}>
            <Button onClick={() => unFold(fold)}>ALCOHOL</Button>
            {fold ? children : null}
        </div>
    );
};

export default Filter;