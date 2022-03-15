<script>
  let todos = [];
  let todoText = "";

  function addTodo() {
    todos = [...todos, todoText];
  }
</script>

<main>
  <ul>
    {#each todos as todo}
      <li>{todo}</li>
    {/each}
  </ul>
  <form on:submit|preventDefault={addTodo}>
    <input bind:value={todoText} />
    <input type="submit" value="Add Todo" />
  </form>
</main>

<style></style>
