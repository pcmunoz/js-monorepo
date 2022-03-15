<template>
  <div>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
    </ul>

    <form v-on:submit.prevent="addTodo">
      <input v-model="todoText" />
      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "Todo",
  data() {
    return {
      todos: [],
      todoText: "",
    };
  },
  methods: {
    addTodo: function () {
      this.todos = [...this.todos, this.todoText];
    },
  },
};
</script>

<style scoped></style>
