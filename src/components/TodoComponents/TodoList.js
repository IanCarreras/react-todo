// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import styled from 'styled-components'

import Todo from './Todo'

const List = styled.div`
    float: right;
    
    width: 70%;
`

export default function TodoList({ toggleTodo, todos }) {
    return (
        <List>
            {
                todos.map((todo, indx) => {
                return <Todo 
                            key={indx}
                            task={todo.task}
                            completed={todo.completed}
                            onClick={() => toggleTodo(todo.id)} />
                })
            }
        </List>
    )
}