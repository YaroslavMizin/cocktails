import React from 'react';
import Footer from '../../components/Footer/Footer';
import css from './About.module.css';

const About = () => {
    return (
        <>
            <div className={css.container}>
                <h1 className={css.about}>Приложение разработано с использованием открытого API сайта thecocktaildb.com:
                    <a href='https://www.thecocktaildb.com/api.php'> https://www.thecocktaildb.com/api.php</a></h1>
                <h1 className={css.about}>This app is built based on free API of thecocktaildb.com:
                    <a href='https://www.thecocktaildb.com/api.php'> https://www.thecocktaildb.com/api.php</a>
                </h1>
            </div>
            <Footer><h3 className={css.about}><a href = 'https://github.com/YaroslavMizin'>https://github.com/YaroslavMizin</a></h3></Footer>
        </>
    );
};

export default About;