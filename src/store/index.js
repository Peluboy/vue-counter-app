import { createStore } from "vuex";

const store = createStore({
  state: {
    counter: 0,
    value: 0,
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0;
    },
    setValue(state, payload) {
      state.value = payload;
    },
  },
  getters: {},
  actions: {},
});

export default store;
