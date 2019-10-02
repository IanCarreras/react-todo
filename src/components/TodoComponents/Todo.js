import React from 'react'
import './Todo.css'

export default function ToDo({ onClick, task, completed }) {
    console.log(completed)
    return (
        <div className={`todo${completed ? ' completed' : ''}`} onClick={onClick}>
            {task}
        </div>
    )
}