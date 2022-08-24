import React, { FC, useState, useEffect } from 'react';
import css from './List.module.css';
import Service from '../../API/Service';
import Loader from '../UI/Loader/Loader';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useFetching } from '../../hooks/useFetching';
import { ICard } from '../../types/drinks';
import Card from '../../components/Card/Card';

interface ListProps {
    children: any[] | React.ReactNode;
}

const List: FC<ListProps> = ({ children }) => {
    const [items, setItems] = useState<ICard[]>([]);
    const { letter } = useTypedSelector(state => state.letterlist);
    const { loading } = useTypedSelector(state => state.loading);
    const [fetchCards, error] = useFetching(async () => {
        const response = await Service.getListByLetter(letter);
        setItems(response.data.drinks);
    });

    useEffect(() => {
        fetchCards(letter);
    }, [letter]);

   

    return (
        <div className={css.container}>
            {loading ? <Loader />
                :
                <div className={css.list}>
                    {items.map(item =>
                        <Card
                            key={Number(item.idDrink)}
                            drink={item}>
                        </Card>)}
                </div>}
        </div>
    );
};

export default List;