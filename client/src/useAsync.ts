import {Reducer, useCallback, useEffect, useReducer, useRef} from "react";

type ReducerAction = | {
    type: 'pending';
} |
    {
        type: 'resolved';
        data: any;
    } |
    {
        type: 'rejected';
        error: any
    }

type ReducerState = {
    status: 'idle' | 'pending' | 'resolved' | 'rejected';
    data: any | null;
    error: any | null;
}

export const useSafeDispath = (dispatch: Function) => {
    const mountedRef = useRef(false)
    useEffect(() => {
        mountedRef.current = true
        return () => {
            mountedRef.current = false
        }
    }, [])
    return useCallback((...args) => (mountedRef.current ? dispatch(...args) : void 0), [dispatch])
}


const asyncReducer: Reducer<ReducerState, ReducerAction> = (prevState: ReducerState, action: ReducerAction) => {
    switch (action.type) {
        case 'pending':
            return {status: 'pending', data: null, error: null}
        case 'resolved':
            return {status: 'resolved', data: action.data, error: null}
        case 'rejected':
            return {status: 'rejected', data: null, error: action.error}
    }
}

export const useAsync = () => {
    const [state, unsafeDispath] = useReducer(asyncReducer, {
        status: 'idle',
        data: null,
        error: null
    })

    const dispatch = useSafeDispath(unsafeDispath)

    const {data, error, status} = state

    const run = useCallback((promise) => {
        dispatch({type: 'pending'})
        return promise.then((value: any) => {
            dispatch({type: 'resolved', data: value})
        }).catch((error: any) => {
            dispatch({type: 'rejected', error: error})
        })
    }, [dispatch])

    return {
        run,
        data,
        status,
        error,
        isLoading: status === 'pending'
    }
}
