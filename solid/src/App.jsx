import { createSignal } from 'solid-js';

function App() {
  const [todos, setTodos] = createSignal([])
  let todoText;

  function addTodo(event){
    event.preventDefault()
    const next = [...todos(), todoText]
    setTodos(next)
  }

  function handleInput(event){
    todoText = event.target.value
  }

  return (
    <div>
      <ui>
        {todos().map(todo => (<li key={todo}>{todo}</li>))}
      </ui>

      <form onSubmit={addTodo}>
        <input type="text" onChange={handleInput}/>
        <input type="submit" value="Add Todo"/>
      </form>
    </div>
  );
}

export default App;
