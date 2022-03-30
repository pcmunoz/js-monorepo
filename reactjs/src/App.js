import React from 'react';
import { v4 as uuid4 } from 'uuid';
import './App.css';

class App extends React.Component {
  state = {
    todo: JSON.parse(localStorage.getItem('todo')) || [],
    inputValue: ''
  }

  handleAdd() {
    const todoList = [...this.state.todo, {id: uuid4(), name: this.state.inputValue}]
    this.setState({
      todo:todoList,
      inputValue: ''
    })
    localStorage.setItem('todo', JSON.stringify(todoList))
  }

  handleInputChange(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  handleDelete(id){
    const todoList = this.state.todo.filter(each => each.id !== id)
    this.setState({
      todo: todoList
    })
    localStorage.setItem('todo', JSON.stringify(todoList))
  }

  render() {
    return (
      <div className="App">
        <h1>TODO</h1>
        <ol type='1'>
        {
          this.state.todo.map((each) =>
            <li key={each.id}>
              <span>{each.name}</span>
              <button onClick={this.handleDelete.bind(this,each.id)}>Delete</button>
            </li>
          )
        }
        </ol>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleAdd.bind(this)}>Add</button>
        </div>
      </div>
    )
  }
}

export default App;
