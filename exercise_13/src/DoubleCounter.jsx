import { useReducer } from 'react'



const DoubleCounter = () => {
    const intialState = { counterA: 0, counterB: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT_A":
                return { ...state, counterA: state.counterA + 1 }
            case "DECREMENT_A":
                return { ...state, counterA: state.counterA - 1 }
            case "INCREMENT_B":
                return { ...state, counterB: state.counterB + 1 }
            case "DECREMENT_B":
                return { ...state, counterB: state.counterB - 1 }
            case "RESET_ALL":
                return intialState;
        }
    }

    const [state, dispatch] = useReducer(reducer, intialState)

    return (
        <>
            <h1>Counter A: {state.counterA}</h1>

            <button onClick={() => dispatch({ type: "DECREMENT_A" })} disabled={state.counterA === 0}>Decrement</button>
            <button onClick={() => dispatch({ type: "INCREMENT_A" })}>Increment</button>

            <h1>Counter B: {state.counterB}</h1>

            <button onClick={() => dispatch({ type: "DECREMENT_B" })} disabled={state.counterB === 0}>Decrement</button>
            <button onClick={() => dispatch({ type: "INCREMENT_B" })}>Increment</button>
            <br />
            <br />
            <button onClick={() => dispatch({ type: "RESET_ALL" })}>Reset All</button>
        </>
    )
}

export default DoubleCounter;