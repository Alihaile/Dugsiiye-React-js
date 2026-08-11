
const TodoList = ({ state, dispatch }) => {
    return (
        <ul>
            {state.map((todo) => (
                <li key={todo.id} className={`${todo.completed ? 'bg-gray-100' : 'bg-gray-50'} flex justify-between items-center gap-2 py-4 rounded-md px-2 mb-[7px]`}>
                    <label htmlFor="text">
                        <input
                            type="checkbox"
                            name="text"
                            checked={todo.completed}
                            className="mr-2 w-4 h-4 accent-purple-600"
                            onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                        />
                        <span className={`font-medium ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                            {todo.text}
                        </span>
                    </label>
                    {todo.completed && (<button className="text-sm font-bold text-rose-500 hover:text-red-700" onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
                        Delete
                    </button>)}
                </li>
            ))}
        </ul>
    )
}

export default TodoList;