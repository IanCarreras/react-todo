import React, { useState } from 'react'

export default function TodoForm({ addTodo, clearCompleted }) {
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({
            task: todo,
            id: Date.now(),
            completed: false
        })
        setTodo('')
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type='text' value={todo} onChange={e => setTodo(e.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
            <button onClick={e => clearCompleted(e)}>Clear Completed</button>
        </div>
    )
}