import { useEffect, useState } from 'react';
import css from './Home.module.css'
import List from '../../components/List/List';
import Aside from '../../components/Aside/Aside';
import LettersPagination from '../../components/UI/LettersPagination/LettersPagination';
import { useTypedSelector } from '../../hooks/useTypeSelector';


const Home = () => {
    const { loading } = useTypedSelector(state => state.loading);

    return (
        <main className={css.main}>
            <Aside></Aside>
            <div
                className={css.container}>
                {<List
                    key={Math.random()}>
                </List>}
                {!loading && <LettersPagination />}

            </div>
        </main>
    );
};

export default Home;