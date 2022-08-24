import { FC } from 'react';
import { ICard } from '../../../types/drinks';
import { img } from '../../../utils/ingregients';

interface ImageProps {
    ingredients: ICard;
}

const Ingredients: FC<ImageProps> = ({ ingredients }) => {

    // let images: any[] = [];

    // Object.entries(ingredients).filter(entry =>
    //     entry[0].includes('strIngredient')).filter(entry =>
    //         entry[1] !== null).forEach(entry =>
    //             images.push(entry[1]));

    return (
        <div>
            {/* {images.map(number => 
                <img
                key={Math.random()}
                src={img(number)}/>
            )} */}
        </div>
    );
};

export default Ingredients;