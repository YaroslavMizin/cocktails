import { forwardRef, useRef} from 'react';
import { useSearch } from '../../../hooks/useSeatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import css from './Select.module.css';

interface SelectProps {
    query: string;
    onClick: (query: string) => void;
}

const Select = forwardRef<HTMLLIElement[], SelectProps>(({query, onClick}, ref) => {
    const {allDrinks} = useTypedSelector(state => state.global);
    const filteredDrinks = useSearch(query, allDrinks);
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