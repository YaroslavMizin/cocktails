import css from './NavBar.module.css';
import React, { FC } from 'react';
import Link from '../UI/Link/Link'
import Button2 from '../UI/Button2/Button2';

interface NavBarProps {
    
}

const NavBar = (props: NavBarProps) => {
    return (
        <header className={css.header}>
            <div className='container'>
                <nav className={css.navbar}>
                    <div className={css.container}>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;