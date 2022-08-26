import { FC, useState } from 'react';
import css from './Ingredients.module.scss';
import { ICard } from '../../../types/drinks';
import { img, setImages, setMeasures } from '../../../utils/ingregients';
import Loader from '../Loader/Loader';

interface ImageProps {
    ingredients: ICard;
}

const Ingredients: FC<ImageProps> = ({ ingredients }) => {

    const [loaded, setLoaded] = useState(false);

    const images: string[] = [];
    const measures: string[] = [];
    setImages(images, ingredients);
    setMeasures(measures, ingredients);
    setTimeout(() => {
        setLoaded(true);
    }, 1000)

    return (
        <div className={css.container}>
            {loaded ? images.map((number, index) =>
                <div
                    key={number}
                    className={css.card}>
                    <span className={css.title}>
                        {number}
                    </span>

                    <img
                        src={img(number)}
                        alt={number} />
                    <span className={css.title}>
                        {measures[index]}
                    </span>
                </div>
            ) : <Loader />}
        </div>
    );
};

export default Ingredients;