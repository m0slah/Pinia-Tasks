import { defineStore } from "pinia";

export const useTaskStore = defineStore("counter", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play football", isFav: true },
    ],
    name:"yoshi"
  }),
  actions: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },
});
