import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({task: todo})
        setTodo('')
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type='text' value={todo} onChange={e => setTodo(e.target.value)} />
            <button>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}