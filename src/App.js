import React from 'react'

import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {}
    this.addTodo = this.addTodo.bind(this)
    this.toggleTodo = this.toggleTodo.bind(this)
  }

  componentWillMount() {
    this.setState({
      todos: [{
        task: 'do stuff',
        id: 1,
        completed: false
      }, 
      {
        task: 'do more stuff',
        id: 2,
        completed: false
      }]
    })
  }

  addTodo = (newTodo) => {
    return this.setState({todos: [...this.state.todos, newTodo]})
  }

  toggleTodo = (e, todoId) => {
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

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleTodo={this.toggleTodo} todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App
