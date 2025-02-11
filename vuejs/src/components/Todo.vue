<template>
  <div class="card flex justify-center">
    <Button label="Verify" />
  </div>
  <div class="main">
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo.label }}</li>
    </ul>
    <div>
      <Listbox
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        class="w-full md:w-56"
      />
    </div>
    <form v-on:submit.prevent="addTodo">
      <input v-model="todoText" />
      <button type="submit">Add Todo</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);

export default {
  name: "Todo",
  data() {
    return {
      selectedCity,
      todos: [],
      todoText: "",
      cities,
    };
  },
  methods: {
    addTodo: function () {
      this.todos = [
        ...this.todos,
        { label: this.todoText, value: this.todoText },
      ];
    },
  },
};
</script>

<style scoped></style>
