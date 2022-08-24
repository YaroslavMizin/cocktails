import React,{FC} from 'react';
import css from './LettersPagination.module.scss';
import { lettersArray } from '../../../utils/letters';
import Button2 from '../Button2/Button2';
import { changeLetter } from '../../../store/actionCreators/letters';
import { useDispatch } from 'react-redux';

const LettersPagination = () => {
    const dispatch = useDispatch();

    return (
        <div className={css.container}>
            {lettersArray.map(letter => 
                <Button2
                key={letter}
                onClick={() => dispatch(changeLetter(letter))}>
                    {letter}
                </Button2>)}
        </div>
    );
};

export default LettersPagination;