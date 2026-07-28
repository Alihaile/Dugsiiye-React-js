import { useReducer } from 'react'



const MultiSetepForm = () => {
    const intialState = { step: 1, firstName: '', lastName: '', email: '', phone: '' };

    const reducer = (state, action) => {
        switch (action.type) {
            case "UPDATE_FIELD":
                return { ...state, [action.payload.name]: action.payload.value }
            case "NEXT_STEP":
                return { ...state, step: state.step + 1 }
            case "PREV_STEP":
                return { ...state, step: state.step - 1 }
            case "RESET_FORM":
                return intialState;
        }
    }

    const [state, dispatch] = useReducer(reducer, intialState)

    const handleSubmit = (e) => {
        dispatch({
            type: 'RESET_FORM'
        })
    }

    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            payload: {
                name: e.target.name,
                value: e.target.value,
            }
        })
    }
    return (
        <>
            <h1>Multi-Step Registration</h1>
            {
                state.step === 1 && (
                    <div>

                        <h1>Step {state.step}: First Name and Last Name</h1>
                        <br />
                        First Name: <input type="text" name="firstName" value={state.firstName} onChange={handleChange} required />
                        <br />
                        Last Name: <input type="text" name="lastName" value={state.lastName} onChange={handleChange} required />
                        <br />
                        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>

                    </div>
                )
            }

            {
                state.step === 2 && (
                    <div>

                        <h1>Step {state.step}: Contact Information</h1>
                        <br />
                        Email: <input type="email" name="email" value={state.email} onChange={handleChange} required />
                        <br />
                        Phone: <input type="number" name="phone" value={state.phone} onChange={handleChange} required />
                        <br />
                        <button onClick={() => dispatch({ type: "PREV_STEP" })} >Back</button>
                        <button onClick={() => dispatch({ type: "NEXT_STEP" })}>Next</button>

                    </div>
                )
            }

            {
                state.step === 3 && (
                    <div>
                        <h1>Step {state.step}: Review</h1>
                        <br />

                        <strong>First Name: </strong>{state.firstName}
                        <br />
                        <br />
                        <strong>Last Name: </strong>{state.lastName}
                        <br />
                        <br />
                        <strong>Email: </strong>{state.email}
                        <br />
                        <br />
                        <strong>Phone: </strong>{state.phone}
                        <br />
                        <br />

                        <button onClick={() => dispatch({ type: "PREV_STEP" })} >Back</button>
                        <button onClick={handleSubmit}>Submit</button>

                    </div>
                )
            }

        </>
    )
}

export default MultiSetepForm;