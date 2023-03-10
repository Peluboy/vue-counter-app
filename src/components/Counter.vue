<template>
  <div>
    <h1>Counter Stepper</h1>
    <p>Value: {{ counter }}</p>
    <button @click="incrementCounter">Increment</button>
    <button @click="decrementCounter">Decrement</button>
    <button @click="resetCounter">Reset</button>
    <input type="number" v-model="value" />
    <button @click="setCounterFromInput">Set Value</button>
  </div>
</template>

<script>
import useCounter from "@/composables/counter.js";
import { computed, ref } from "vue";

export default {
  name: "CounterStepper",
  setup() {
    const { state, increment, decrement, reset, setValue } = useCounter();
    const counter = computed(() => state.value);
    const value = ref(null);

    const incrementCounter = () => {
      increment();
    };

    const decrementCounter = () => {
      decrement();
    };

    const resetCounter = () => {
      reset();
    };

    const setCounterFromInput = () => {
      if (value.value !== null) {
        setValue(parseInt(value.value));
      }
    };

    return {
      counter,
      incrementCounter,
      decrementCounter,
      resetCounter,
      value,
      setCounterFromInput,
    };
  },
};
</script>
