<template>
<div class="todo">
  <todo-list></todo-list>
  </div>
  
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "todo",
  components: {
    TodoList
  }
};
</script>

<style>
.todo {
  max-width: 600px;
  margin: 50px auto;
}
</style>
