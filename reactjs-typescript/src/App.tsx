import React from 'react';
import './App.css';

const App:React.FC = () => {
  const [todos, setTodos] = React.useState<string[]>([])
  const [inputValue, setInputValue] = React.useState('')

  const handleAdd = () => {
    setTodos(prev => [...prev, inputValue])
    setInputValue('')
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="App">
      <ul>
        {todos.map((each, index) =>
          <li key={index}>{each}</li>
        )}
      </ul>
      <div>
        <input value={inputValue} onChange={handleInputChange}/>
        <button onChange={handleAdd}>Add</button>
      </div>
    </div>
  );
}

export default App;
