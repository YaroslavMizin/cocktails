import { useState } from "react";
import { useDispatch } from "react-redux";
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
            console.log(e.message);
        }
        finally {
            dispatch(finishLoading());
        }
    }

    return [fetching, error];
}