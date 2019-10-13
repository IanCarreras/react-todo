import React, { useState } from 'react'
import styled from 'styled-components'

const SideBar = styled.div`
    height: 75vh;
    width: 15%;
    text-align: center;
    padding: 1rem 1rem 0 1rem;
    float: left;
    border-right: 1px solid black;
`
const Input = styled.input`
    height: 1.5rem;
    margin-top: .5rem;
`
const Button = styled.button`
    margin: .5rem 0 0 0;
    :hover {
        cursor: pointer;
        background: black;
        color: white;
        border-radius: .5rem;
    }
`

export default function TodoForm({ addTodo, clearCompleted, setSearchTerm }) {
    const [todo, setTodo] = useState('')
    const [search, setSearch] = useState('')

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
        <SideBar>
            <form onSubmit={e => handleSubmit(e)}>
                <Input type='text' value={todo} onChange={e => setTodo(e.target.value)} />
                <Button type='submit'>Add Todo</Button>
            </form>
            <Button onClick={e => clearCompleted(e)}>Clear Completed</Button>
            <Input type='text' placeholder='search' onChange={e => setSearchTerm(e.target.value)} />
        </SideBar>
    )
}