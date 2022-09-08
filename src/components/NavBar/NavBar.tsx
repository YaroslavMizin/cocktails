import css from './NavBar.module.css';
import { FC } from 'react';
import Link from '../UI/Link/Link'
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