// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

export default function TodoList({ todos }) {
    return (
        <div>
            {
                todos.map((todo, indx) => {
                    return <Todo key={indx} task={todo.task} />
                })
            }
        </div>
    )
}