<template>
  <main>
    <!-- heading -->
    <header>
      <img src="../public/pinia-logo.svg" alt="pinia logo " />
      <h1>{{ taskStore.name }}</h1>
    </header>

    <!-- task-list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <p>{{ task.title }}</p>
      </div>
    </div>

    <!-- end-main -->
  </main>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";

export default {
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>
