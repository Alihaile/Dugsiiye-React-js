import { useReducer, useState } from 'react'
import TodoList from './TodoList'
import styles from './todoStyles.module.css';



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
        dispatch({
            type: 'ADD_TODO',
            payload: { id: Date.now(), text: text, completed: false }
        })
        setText('');
    }
    return (
        <div className={styles.todoApp}>
            <div className={styles.header}>
                <h1>Todo App</h1>
            </div>
            <div className={styles.todoCard}>
                <h1>My Todo List</h1>

                <div className={styles.todoForm}>
                    <input type="text" name="text" value={text} placeholder='Add a new task'
                        onChange={(e) => setText(e.target.value)} required />
                    <button onClick={handleClick}>Add</button>
                </div>

                <div className={styles.todoList}>
                    <TodoList state={state} dispatch={dispatch} />
                </div>

            </div>
        </div>
    )
}

export default TodoApp;