import React, { FC } from 'react';
import css from './LettersPagination.module.scss';
import { lettersArray } from '../../../utils/letters';
import Button2 from '../Button2/Button2';
import { changeLetter } from '../../../store/actionCreators/list';
import { useDispatch } from 'react-redux';

const LettersPagination = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.container}>
            <h2 className={css.title}>Browse alphabetically</h2>
            <div className={css.pagination}>
                {lettersArray.map(letter =>
                    <Button2
                        key={letter}
                        onClick={() => dispatch(changeLetter(letter))}>
                        {letter}
                    </Button2>)}
            </div>
        </div>
    );
};

export default LettersPagination;