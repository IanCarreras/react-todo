import React from 'react'
import styled from 'styled-components'

import './Todo.css'

const Todo = styled.div`
    font-size: 1.5rem;
    margin-top: 1rem;
`

export default function ToDo({ onClick, task, completed }) {
    return (
        <Todo className={`todo${completed ? ' completed' : ''}`} onClick={onClick}>
            {task}
        </Todo>
    )
}