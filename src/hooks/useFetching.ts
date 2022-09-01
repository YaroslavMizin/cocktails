import { useState } from "react";
import { useDispatch } from "react-redux";
import Service from "../API/Service";
import { changeList, setGlobalList } from "../store/actionCreators/list";
import { finishLoading, setLoading } from "../store/actionCreators/loading";

export const useFetching = (callback: () => Promise<void>) => {
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
                dispatch(setLoading());
                const response = await Service.getListByLetter(letter);
                dispatch(setGlobalList([...response.data.drinks]));
                dispatch(changeList());
            } catch (e: any) {
                setError(e.message);
            }
            finally {
                dispatch(finishLoading());
            }
    }
    const fetchAll = (array: string[]) => {array.forEach(letter => fetching(letter))} ;
    return [fetchAll, error];
}