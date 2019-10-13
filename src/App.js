import React from 'react'
import styled from 'styled-components'

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

const AppContainer = styled.div`
  border: 1px solid black;
  border-radius: .3rem;
  height: 97vh;
`

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: [{
        task: 'do stuff',
        id: 1,
        completed: false
      }, 
      {
        task: 'do more stuff',
        id: 2,
        completed: false
      }],
      searchTerm: '',
      render: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
    this.setSearchTerm = this.setSearchTerm.bind(this)
  }

  addTodo = (newTodo) => {
    return this.setState({todos: [...this.state.todos, newTodo]})
  }

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  clearCompleted = (e) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      })
    })
  }

  setSearchTerm = (value) => {
    return this.setState({ searchTerm: value })
  }

  componentDidUpdate() {
    console.log(this.state.todos.map(todo => todo.task.includes(this.state.searchTerm) ? todo : ''))
  }

  render() {
    return (
      <AppContainer>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
          setSearchTerm={this.setSearchTerm} />
        <TodoList 
          toggleTodo={this.toggleTodo}
          todos={(this.state.searchTerm === '') ? this.state.todos : this.state.render} />
      </AppContainer>
    );
  }
}

export default App