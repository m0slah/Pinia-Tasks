<template>
  <main>
    <!-- heading  -->
    <header>
      <h1>Pinia tasks</h1>
    </header>
    
    <!-- task list  -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "pinia";
import { useTaskStore } from "./stores/store";
import TaskDetails from './components/TaskDetails.vue'

export default {
  components: {
    TaskDetails,
  },
  computed: {
    // ...mapState(useCounterStore, ["count"]),

    ...mapState(useTaskStore, {
      myNumber: "count",
    }),

    ...mapState(useTaskStore, {
      double: (store) => store.count * 2,
    }),

    ...mapState(useTaskStore, {
      magicValue(store) {
        return store.someGetter + this.count + this.doubleP;
      },
    }),
  },

  setup: () => {
    const taskStore = useTaskStore();

    const increment = () => {
      counterStore.increment();
    };

    const reset = () => {
      counterStore.reset();
    };

    return { taskStore, increment, reset };
  },
};
</script>
