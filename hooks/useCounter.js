import { useState } from "react";

//Este custom hook por ejemplo va a retornar el estado del contador, la funcion incrementar y decrementar
export const useCounter = (initialState = 1) => {
    const [state, setstate] = useState(initialState);
    
    const increment = () => {
        setstate(state + 1);
    }    
    const decrement = () => {
        setstate(state - 1);
    }
    const reset = () => {
        setstate(initialState);
    }

    return {
        state,
        increment,
        decrement,
        reset
    }
}
