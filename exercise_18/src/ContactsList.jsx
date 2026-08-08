import React from 'react'

import { useContext } from 'react';
import { ContactContext } from './ContactContext';
import ContactItem from './ContactItem';

const ContactsList = ({ setEditing }) => {
    const { state, dispatch } = useContext(ContactContext);
    console.log("Contacts state:", state);

    if (!state || state.length === 0) {
        return <p>No contacts available.</p>;
    }

    return (
        <div>
            <ul>
                {state.map((contact, index) => (
                    <ContactItem key={index} setEditing={setEditing} contact={contact} />
                ))}
            </ul>
        </div>
    )
}

export default ContactsList