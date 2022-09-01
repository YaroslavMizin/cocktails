import css from './NavBar.module.css';
import React, { FC } from 'react';
import Link from '../UI/Link/Link'
import Button2 from '../UI/Button2/Button2';
import Input from '../UI/Input/Input';
import Link2 from '../UI/Link2/Link2';
import Search from '../Search/Search';

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = () => {
    return (
        <header className={css.header}>
            <div className='container'>
                <nav className={css.navbar}>
                    <h1 className={css.logo}>Cocktails</h1>
                    <div className={css.container}>
                        <Link to='/'>Home</Link>
                        <Search></Search>
                        <Link to='/about'>About</Link>
                    </div>
                    <div className={css.user}>
                        <Link2 to='/'>SignUp</Link2>
                        <span className={css.divide}>|</span>
                        <Link2 to='/'>LogIn</Link2>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;