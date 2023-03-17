import { reactive } from "vue";

export default function useCounter() {
  const state = reactive({
    value: 0,
  });

  const increment = () => {
    state.value++;
  };

  const decrement = () => {
    state.value--;
  };

  const reset = () => {
    state.value = 0;
  };

  const setValue = (newValue) => {
    state.value = newValue > 10000 ? 10000 : newValue;
  };

  return {
    state,
    increment,
    decrement,
    reset,
    setValue,
  };
}
