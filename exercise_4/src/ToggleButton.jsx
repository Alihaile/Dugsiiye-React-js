import { useState } from 'react'

let ToggleButton = () => {

    const [toggle, setToggle] = useState(false);

    let toggleButton = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <p>Turn {toggle ? 'ON' : 'OFF'} the light: </p>
            <button onClick={toggleButton}>{toggle ? 'ON' : 'OFF'}</button>
        </>
    )
}

export default ToggleButton