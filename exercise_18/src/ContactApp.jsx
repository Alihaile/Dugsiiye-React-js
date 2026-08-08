import React, { useContext, useState } from "react";

import { ContactContext } from "./ContactContext";
import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";

const ContactApp = () => {

    const { state, dispatch } = useContext(ContactContext);
    const [editing, setEditing] = useState(null);


    return (
        <>
            <h1>Contact Management App</h1>
            <h3>Add New Contact</h3>
            <ContactForm  editing={editing} setEditing={setEditing} />
            <br />
            <h3>Contacts List</h3>
            <ContactsList setEditing={setEditing} />
        </>
    );
};

export default ContactApp;
