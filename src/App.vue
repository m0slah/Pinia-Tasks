<template>
  <main>
    <!-- heading -->
    <header>
      <img src="../public/pinia-logo.svg" alt="pinia logo " />
      <h1>{{ taskStore.name }}</h1>
    </header>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favourite'">Favourites Tasks</button>
    </nav>

    <!-- task-list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>All Tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- Favourites-list -->
    <div class="task-list" v-if="filter === 'favourite'">
      <p>Favourites Tasks</p>
      <div v-for="task in taskStore.Favourite">
        <TaskDetails :task="task" />
      </div>
    </div>

    <!-- end-main -->
  </main>
</template>

<script>
import { ref } from "vue";
import TaskDetails from "./components/TaskDetails.vue";
import { useTaskStore } from "./stores/TaskStore";

export default {
  components: {
    TaskDetails,
  },
  setup() {
    const taskStore = useTaskStore();

    const filter = ref("all");

    return { taskStore, filter };
  },
};
</script>
