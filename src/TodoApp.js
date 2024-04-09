import React, { useContext } from 'react';
import useTodos from './hooks/useTodos.js'

const initialTodos = [
    { id: 1, titulo: 'Aprender react' },
    { id: 2, titulo: 'Aprender node' },
]

const TodoApp = () =>{
    const [todos, addTodo, deleteTodo] = useTodos(initialTodos);

    return (
        <div>
            <button onClick={() => addTodo({ titulo: 'Nueva tarea'})}>
                Agregar
            </button>
            <ul>
                {todos.map(todo =>(
                    <li key={todo.id}>
                    {todo.titulo}
                    <button onClick={() => deleteTodo(todo.id)}>
                        Eliminar
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp