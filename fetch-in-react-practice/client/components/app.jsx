import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todoItems => this.setState({ todos: todoItems }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    const duplicateTodos = [...this.state.todos];
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        duplicateTodos.push(data);
        this.setState({ todos: duplicateTodos });
      })
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    const duplicateList = [...this.state.todos];
    const todoItem = duplicateList
      .filter(element => element.todoId === todoId)
      .map(element => element);
    todoItem[0].isCompleted = !todoItem[0].isCompleted;
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isCompleted: todoItem[0].isCompleted })
    })
      .then(res => res.json())
      .then(this.setState({ todos: duplicateList }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
