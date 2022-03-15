import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    todos: [],
    inputValue: ''
  }

  handleAdd() {
    this.setState((state) => ({
      todos: [...state.todos, state.inputValue],
      inputValue: ''
    }))
  }

  handleInputChange(event){
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
        {
          this.state.todos.map((each, index) =>
            <li key={index}>{each}</li>
          )
        }
        </ul>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleAdd.bind(this)}>Add</button>
        </div>
      </div>
    )
  }
}

export default App;
