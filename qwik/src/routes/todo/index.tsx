import { component$, useStore } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

interface Todo {
    name: string
}

export default component$(() => {

  const state = useStore({input: '', todo: [] as Todo[]});

  return (
    <>
      <h1>Todo</h1>
      <section>
        <label>Task: </label>
        <input 
            type="text"
            name='name'
            value={state.input}
            onInput$={(event) => {
                state.input = (event.target as HTMLInputElement).value
            }}
        />
        <button 
            onClick$={() => {
                if(state.input){
                    state.todo = [...state.todo, {name: state.input}]
                    state.input = ''
                }
            }}
        >Add</button>
      </section>
      {
        state.todo.map(each => (
            <h2>{each.name}</h2>
        ))
      }
    </>
  );
});

export const head: DocumentHead = {
  title: 'My TODO',
};
