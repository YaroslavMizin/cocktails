import { forwardRef, useEffect, useRef} from 'react';
import { useFilter } from '../../../hooks/useFilter';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import css from './Select.module.css';

interface SelectProps {
    query: string;
    onClick: (query: string) => void;
}

const Select = forwardRef<HTMLLIElement[], SelectProps>(({query, onClick}, ref) => {
    const {all} = useTypedSelector(state => state.letterlist);
    const filteredDrinks = useFilter(query, all);
    const arrayRef = useRef<HTMLLIElement[]>([]);
    const changeItem = (e: React.KeyboardEvent<EventTarget>) => {
        if(e.key === "ArrowDown") {
            arrayRef.current[+1].focus();
        }
        if(e.key === "ArrowUp") {
            arrayRef.current[-1].focus();
        }
    }

    return (
            <ul className={css.select}>
                {query && filteredDrinks.map((item, index) =>
                    <li
                    // ref={ref? (e: HTMLLIElement) => ref.current.push(e) : null}
                    tabIndex={index}
                    value={item.strDrink}
                    key={item.strDrink}
                    onKeyUp={(e) => changeItem(e)}
                    onKeyDown={() => onClick(item.strDrink)}
                    onClick={() => onClick(item.strDrink)}
                    className={css.item}>{item.strDrink}</li>)}
            </ul>
    );
});

export default Select;