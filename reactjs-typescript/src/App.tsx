import React from 'react'
import { v4 as uuid4 } from 'uuid'
import './App.css'

interface Todo {
  id: string
  name: string
}

const App:React.FC = () => {
  const [todo, setTodo] = React.useState<Todo[]>([])
  const [inputValue, setInputValue] = React.useState('')

  const handleAdd = () => {
    const todoList = [...todo, {id: uuid4(),name: inputValue}]
    setTodo(todoList)
    setInputValue('')

    localStorage.setItem('todo', JSON.stringify(todoList))
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleDelete = (id: string) => {
    const todoList = todo.filter(each => each.id !== id)
    setTodo(todoList)

    localStorage.setItem('todo', JSON.stringify(todoList))
  }

  React.useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem('todo') || ''))
  },[])

  return (
    <div className="App">
      <h1>TODO</h1>
      <ol type='1'>
        {todo.map((each) =>
          <li key={each.id}>
            <span>{each.name}</span>
            <button onClick={() => handleDelete(each.id)}>Delete</button>
          </li>
        )}
      </ol>
      <div>
        <input value={inputValue} onChange={handleInputChange}/>
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default App;
