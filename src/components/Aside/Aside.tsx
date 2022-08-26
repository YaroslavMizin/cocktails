import React from 'react';
import { useDispatch } from 'react-redux';
import Filter from '../Filter/Filter';
import String from '../UI/String/String';
import css from './Aside.module.scss';
import { setNonAlcoholic, setAlcoholic, changeList, changeLetter, setOptionalAlcoholic } from '../../store/actionCreators/list';
import { useTypedSelector } from '../../hooks/useTypeSelector';

interface AsideProps {

}

const Aside = () => {
    const dispatch = useDispatch();
    const { letter } = useTypedSelector(state => state.letterlist)

    return (
        <aside className={css.aside}>
            <Filter>
                <String onClick={() => dispatch(changeList())}>All</String>
                <String onClick={() => dispatch(setAlcoholic())}>Alcoholic</String>
                <String onClick={() => dispatch(setNonAlcoholic())}>Non-Alcoholic</String>
                <String onClick={() => dispatch(setOptionalAlcoholic())}>Optional alchohol</String>
            </Filter>
        </aside>
    );
};

export default Aside;