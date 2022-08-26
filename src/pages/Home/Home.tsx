import css from './Home.module.css';
import List from '../../components/List/List';
import Aside from '../../components/Aside/Aside';

const Home = () => {

    return (
        <main className={css.main}>
            <Aside></Aside>
            <div
                className={css.container}>
                <List />
            </div>
        </main>
    );
};

export default Home;