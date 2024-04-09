import { useState, useEffect } from 'react';

const useTodos = (initialTodos) => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || initialTodos
);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const addTodo = (newTodo) => {
        newTodo.id = Date.now();

        setTodos([
            ...todos,
            newTodo
        ])
    }

    const deleteTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    return[
        todos,
        addTodo,
        deleteTodo,
    ]
}

export default useTodos