import { useRef } from 'react';
import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true); //Con esta variable veremos si el componente sigue montado o no
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return () => {
            isMounted.current = false; //En caso de que se desmonte el componente cambiamos el valor del useRef a false
        }
    }, [])

    
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current){ //Condicional que se fija si está o no montado, en caso de estarlo modifica el estado
                    setState({
                        loading:false,
                        error:null,
                        data
                    });
                }
            })
        return () => {
            setState({
                loading:true,
                error:null,
            })
        }
    }, [url])

    return state;
}
