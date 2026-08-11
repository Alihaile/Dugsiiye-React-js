import { useReducer, useState } from 'react'
import TodoList from './TodoList'



const TodoApp = () => {
    const intialState = [];
    const [text, setText] = useState('');

    const reducer = (state, action) => {
        switch (action.type) {
            case "ADD_TODO":
                return [...state, action.payload]
            case "TOGGLE_TODO":
                return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
            case "REMOVE_TODO":
                return state.filter((todo) => todo.id !== action.payload)
        }
    }

    const [state, dispatch] = useReducer(reducer, intialState)


    const handleClick = (e) => {
        if (!text) {
            return;
        }

        dispatch({
            type: 'ADD_TODO',
            payload: { id: Date.now(), text: text, completed: false }
        })
        setText('');
    }
    return (
        <div className="w-full">
            <div className="h-20 flex justify-center items-center bg-white mb-5 shadow-sm">
                <h1 className="py-2 px-4 bg-fuchsia-100 rounded-md font-bold text-fuchsia-700">Todo App</h1>
            </div>
            <div className="flex flex-col gap-5 w-full md:max-w-md mx-auto bg-white p-5 rounded-md shadow-sm">
                <h1 className="text-xl font-bold text-slate-600 text-center">My Todo List</h1>

                <div className="flex gap-2 w-full">
                    <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" name="text" value={text} placeholder='Add a new task'
                        onChange={(e) => setText(e.target.value)} required />
                    <button onClick={handleClick} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">
                        Add
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    <TodoList state={state} dispatch={dispatch} />
                </div>

            </div>
        </div>
    )
}

export default TodoApp;