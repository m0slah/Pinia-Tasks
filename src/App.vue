<template>
  <main>
    <!-- heading -->
    <header>
      <img src="../public/pinia-logo.svg" alt="pinia logo " />
      <h1>{{ taskStore.name }}</h1>
    </header>

    <!-- task-list -->
    <div class="task-list">
      <p>All Tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- Favourites-list -->
    <div class="task-list">
      <p>Favourites Tasks</p>
      <div v-for="task in taskStore.Favourite">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- end-main -->
  </main>
</template>

<script>
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";

export default {
  components: {
    TaskDetails,
  },
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>
