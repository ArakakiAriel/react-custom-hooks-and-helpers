import { useState, useEffect, useRef } from 'react';


export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect( () => {

        setState({ data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if ( isMounted.current ) { //Conditional that check if the Component is mounted or not.
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }

            })
            .catch( (e) => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Show some error'
                })
            })

    },[url])

    return state;
}
