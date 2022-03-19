import { useState } from 'preact/hooks';
import style from './style.css';

const Home = () => {
	const [todos, setTodos] = useState([])
	const [todoText, setTodoText] = useState('')

	const addTodo = () => {
		setTodos(prev => [...prev, todoText])
	}

	const handleChange = (event) => {
		setTodoText(event.target.value)
	}

	return (
		<div class={style.home}>
			<h1>Home</h1>
			<p>This is the Home component.</p>
			<ul>
				{todos.map(each => <li>{each}</li>)}
			</ul>
			<div>
				<input type="text" onChange={handleChange}/>
				<button onClick={addTodo}>Add Todo</button>
			</div>
		</div>
	);
}

export default Home;
