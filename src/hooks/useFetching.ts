import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Service from "../API/Service";
import { setGlobalDrinks } from "../store/actions/global";
import { finishLoading, setLoading } from "../store/actions/loading";

export const useFetching = (callback: () => Promise<void>): [() => void, string] => {
    const [error, setError] = useState<any>('');
    const dispatch = useDispatch();

    const fetching = async () => {
        try {
            dispatch(setLoading());
            await callback();
        } catch (e: any) {
            setError(e.message);
        } finally {
            dispatch(finishLoading());
        }
    }
    return [fetching, error];
}

export const useFetchingAll = () => {
    const [error, setError] = useState<any>('');
    const dispatch = useDispatch();

    const fetching = async (letter: string) => {
            try {
                const response = await Service.getListByLetter(letter);
                dispatch(setGlobalDrinks([...response]));
            } catch (e: any) {
                setError(e.message);
            }
    }
    const fetchAll = (array: string[]) => {array.forEach(letter => fetching(letter))};
    return [fetchAll, error];
}