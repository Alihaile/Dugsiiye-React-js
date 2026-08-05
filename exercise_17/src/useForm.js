import { useState } from "react";


export const useForm = ({ state = null }) => {
    const [values, setValues] = useState(state);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    }

    return { values, handleChange };
};
