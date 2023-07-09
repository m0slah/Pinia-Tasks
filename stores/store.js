import { defineStore } from "pinia";

export const useStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "buy some milk",
        isFav: flase,
      },
      {
        id: 2,
        title: "play Gloomhaven ",
        isFav: true,
      },
    ],
    name: "Yoshi",
  }),
});
