import { FC, useEffect } from 'react';
import css from './List.module.css';
import Loader from '../UI/Loader/Loader';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import Card from '../../components/Card/Card';
import { useDispatch } from 'react-redux';
import { changeList } from '../../store/actionCreators/list';
import { finishLoading, setLoading } from '../../store/actionCreators/loading';

const List: FC = () => {

    const dispatch = useDispatch();
    const { letter, list, all } = useTypedSelector(state => state.letterlist);
    const { loading } = useTypedSelector(state => state);

    useEffect(() => {
        dispatch(changeList());
    }, [letter])

    return (
        <div className={css.container}>
            {loading ? <Loader style={{marginTop: '300px'}}/>
                :
                <div className={css.list}>
                    {list.length? list.map(item =>
                        <Card
                            key={Number(item.idDrink)}
                            drink={item}>
                        </Card>)
                        :
                        <h1 className={css.not_found}>No drinks found</h1>}
                </div>}
        </div>
    );
};

export default List;