import { memo } from 'react';
import { useDispatch } from 'react-redux';
import Filter from '../Filter/Filter';
import String from '../UI/String/String';
import css from './Aside.module.scss';
import { setNonAlcoholic, setAlcoholic, changeList, changeLetter, setOptionalAlcoholic } from '../../store/actionCreators/list';
import { useTypedSelector } from '../../hooks/useTypeSelector';

const Aside = memo(() => {
    const dispatch = useDispatch();
    const { alcoholic, nonAlcoholic, optionalAlcohol } = useTypedSelector(state =>
        state.letterlist.filters)

    return (
        <aside className={css.aside}>
            <Filter>
                <String
                    active={!alcoholic && !nonAlcoholic && !optionalAlcohol}
                    onClick={() => dispatch(changeList())}>
                    All
                </String>
                <String
                    active={alcoholic}
                    onClick={() => dispatch(setAlcoholic())}>
                    Alcoholic
                </String>
                <String
                    active={nonAlcoholic}
                    onClick={() => dispatch(setNonAlcoholic())}>
                    Non-Alcoholic
                </String>
                <String
                    active={optionalAlcohol}
                    onClick={() => dispatch(setOptionalAlcoholic())}>
                    Optional alchohol
                </String>
            </Filter>
        </aside>
    );
});

export default Aside;