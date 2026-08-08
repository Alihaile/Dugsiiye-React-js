import React from 'react'
import { useContext } from 'react';
import { ContactContext } from './ContactContext';

const ContactItem = ({ contact, setEditing }) => {
    const { dispatch } = useContext(ContactContext);

    return (
        <li>
            <h3>{contact.name} {contact.favorite && '⭐'}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <br />
            <button onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: contact.id })}>
                {contact.favorite ? 'Unfavorite' : 'Favorite'}
            </button>
            <button onClick={() => setEditing(contact)}>Edit</button>
            <button onClick={() => dispatch({ type: 'DELETE', payload: contact.id })}>Delete</button>

        </li>
    )
}

export default ContactItem