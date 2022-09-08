import { FC, memo } from 'react';
import css from './LettersPagination.module.scss';
import { lettersArray } from '../../../utils/letters';
import Button2 from '../Button2/Button2';
import { useNavigate } from 'react-router-dom';

interface LettersPaginationProps {
    type?: string;
    current?: string;
}

const LettersPagination:FC<LettersPaginationProps> = memo(({type, current}) => {
    const navigate = useNavigate();

    return (
        <div className={css.container}>
            <h2 className={css.title}>Browse alphabetically</h2>
            <div className={css.pagination}>
                {lettersArray.map(letter =>
                    <Button2
                        current={current}
                        key={letter}
                        onClick={() => navigate(`/${type}/list/${letter}`)}>
                        {letter}
                    </Button2>)}
            </div>
        </div>
    );
});

export default LettersPagination;