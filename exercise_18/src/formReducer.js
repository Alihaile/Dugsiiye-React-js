import { useState } from "react";

export const formReducer = (state, action) => {

    console.log("Form Reducer - Action Type: %s, Payload:", action.type, action.payload);

    switch (action.type) {
        case 'EDIT':

            const newState = state.map((item) => {
                return item.id === action.payload.id ? action.payload : item;
            });


            return newState;
        case 'ADD':

            console.log("Adding new contact:", action.payload);
            return [
                ...state,
                action.payload
            ];

        case 'TOGGLE_FAVORITE':
            return state.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, favorite: !item.favorite };
                }
                return item;
            });
        case 'DELETE':
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }

};
