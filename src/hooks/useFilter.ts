import { useState } from "react";
import { ICard } from "../types/drinks";

export const useFilter = (list: ICard[]): [ICard[], string, (option: string) => void] => {
    const [filteredList, setList] = useState<ICard[]>([] as ICard[]);
    const [option, setOption] = useState<string>('' as string);
    const setFilter = (option: string) => {
        if (option === 'All') {
            setList(list);
            setOption(option);
        } else {
            setList(list.filter(card => Object.values(card).includes(option)));
            setOption(option);
        }
    }
    return [filteredList, option, setFilter];
}