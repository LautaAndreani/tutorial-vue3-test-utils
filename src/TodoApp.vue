<script lang="ts">
import { defineComponent, reactive, ref } from "vue"

export default defineComponent({
  name: "TodoApp",
  setup() {
    const todos = reactive([
      {
        id: 1,
        text: "Learn Vue.js 3",
        completed: false,
      },
    ])

    const input = ref("")

    function handleSubmit() {
      const newTodo = { id: 2, text: input.value, completed: false } as any
      todos.push(newTodo)
      input.value = ""
    }

    return { todos, input, handleSubmit }
  },
})
</script>

<template>
  <form @submit.prevent="handleSubmit" data-test="form">
    <input type="text" data-test="new todo" v-model="input" />
  </form>
  <div v-for="todo in todos" :key="todo.id" :class="[todo.completed ? 'completed' : '']" data-test="todo">
    <input type="checkbox" id="checkbox" v-model="todo.completed" data-test="todo-checkbox" />
    <label for="checkbox">{{ todo.text }}</label>
  </div>
</template>

<style scoped></style>
