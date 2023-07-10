import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "buy some milk",
        isFavourite: false,
      },
      {
        id: 2,
        title: "play Gloomhaven ",
        isFavourite: true,
      },
    ],
    name: "Yoshi",
  }),

  getters: {
    // Favourits-function
    Favourite() {
      return this.tasks.filter((task) => task.isFavourite);
    },
  },
});
