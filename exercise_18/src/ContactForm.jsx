import { useState, useEffect, useContext } from "react";
import { ContactContext } from "./ContactContext";

function ContactForm({ editing, setEditing }) {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const { dispatch } = useContext(ContactContext);

    useEffect(() => {
        if (editing) {
            setContact(editing);
        }
    }, [editing]);

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!contact.name || !contact.email || !contact.phone) return;

        if (editing) {
            dispatch({
                type: "EDIT",
                payload: contact,
            });

            setEditing(null);
        } else {
            dispatch({
                type: "ADD",
                payload: {
                    ...contact,
                    id: Date.now(),
                    favorite: false,
                },
            });
        }

        setContact({
            name: "",
            email: "",
            phone: "",
        });
    };

    const handleCancel = () => {
        setEditing(null);

        setContact({
            name: "",
            email: "",
            phone: "",
        });

    }

    return (
        <form onSubmit={handleSubmit}>
            Name: <input
                name="name"
                placeholder="Name"
                value={contact.name}
                onChange={handleChange}
            />

            <br />
            Email: <input
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
            />

            <br />
            Phone: <input
                name="phone"
                placeholder="Phone"
                value={contact.phone}
                onChange={handleChange}
            />

            <br />
            <br />
            <button>{editing ? "Update" : "Add Contact"}</button>
            {editing && (
                <button onClick={handleCancel}>Cancel</button>
            )}
        </form>
    );
}

export default ContactForm;