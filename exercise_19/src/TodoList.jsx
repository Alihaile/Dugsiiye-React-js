
import styles from './todoStyles.module.css';

const TodoList = ({ state, dispatch }) => {
    return (
        <ul>
            {state.map((todo) => (
                <li key={todo.id}>
                    <label htmlFor="text">
                        <input
                            type="checkbox"
                            name="text"
                            checked={todo.completed}
                            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                    </label>
                    {todo.completed && (<button className={styles.remove} onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
                        Delete
                    </button>)}
                </li>
            ))}
        </ul>
    )
}

export default TodoList;