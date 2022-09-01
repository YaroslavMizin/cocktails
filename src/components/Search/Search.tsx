import React, { useState, useRef } from 'react';
import css from './Search.module.scss';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import useOutside from '../../hooks/useOutside';
import { Button } from '../UI/Button/Button';

const Search = () => {
    const [focus, setFocus] = useState(false);
    const [query, setQuery] = useState<string>('');
    const navigate = useNavigate();
    const dropdownRef = useRef<HTMLFormElement>(null);
    const focusRef = useRef<HTMLInputElement>(null);
    const arrowRef = useRef<HTMLLIElement[]>([]);
    useOutside(dropdownRef, setFocus);

    const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
        event.preventDefault();
        navigate(`/drinks/${query}`);
        setQuery('');
    }

    const setQueryAndFocus = (string: string) => {
        setQuery(string);
        if (focusRef.current !== null) focusRef.current.focus()
        if (focus) setFocus(false);
    }

    const setFoucusOnArrow = (e: React.KeyboardEvent<EventTarget>) => {
        if (arrowRef.current !== null) {
            if(e.key === 'ArrowDown') {
                arrowRef.current[0].focus();
            }
        }
        console.log(e.key)
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            ref={dropdownRef}
            className={css.search}>
            <div className={css.container}>
                <Input
                    style={{zIndex: '5'}}
                    ref={focusRef}
                    value={query}
                    onKeyUp={(e) => setFoucusOnArrow(e)}
                    onKeyDown={() => setFocus(true)}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    placeholder='Search drinks'/>
                <Button style={{marginLeft: '-3px'}}>Search</Button>
            </div>
            {focus && <Select
                ref={arrowRef}
                onClick={setQueryAndFocus}
                query={query} />}
        </form>
    );
};

export default Search;