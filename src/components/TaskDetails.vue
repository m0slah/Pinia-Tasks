<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons" @click.prevent="">favorite</i>
    </div>
  </div>
</template>

<script>

export default {
  name: "TaskDetails",
  props: ["task"],
};
</script>
