<template>
  <div>
    <!-- <h1>Counter Stepper</h1> -->
    <div :style="{ borderRadius: divBorderRadius }" class="increment_decrement">
      <button
        :style="{
          borderRadius: buttonBorderRadius,
        }"
        @click="decrementCounter"
        class="minus"
      >
        <img src="../assets/minus.svg" />
      </button>

      <h1>{{ counter.toLocaleString() }}</h1>

      <button
        :style="{ borderRadius: buttonBorderRadius }"
        @click="incrementCounter"
        class="plus"
      >
        <img src="../assets/plus.svg" />
      </button>
    </div>

    <div class="input_field">
      <button @click="resetCounter" class="reset">Reset</button>
      <input
        type="number"
        v-model="value"
        placeholder="input value (max: 10,000)"
        max="10000"
      />
      <button @click="setCounterFromInput" class="setValue">Set Value</button>
    </div>
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

    const buttonBorderRadius = computed(() => {
      return counter.value !== 0 ? "50%" : "8px";
    });

    const divBorderRadius = computed(() => {
      return counter.value !== 0 ? "50px" : "15px";
    });

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
      buttonBorderRadius,
      divBorderRadius,
    };
  },
};
</script>

<style>
.increment_decrement {
  display: flex;
  width: 380px;
  padding: 0.5rem 0.7rem;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.minus {
  background: #ebe7eb;
}

.plus {
  background: #c3ffd7;
}
.increment_decrement > h1 {
  font-weight: 400;
  font-size: 60px;
  line-height: 0;
  color: #626262;
}

.input_field {
  margin-top: 2rem;
  width: 400px;
  height: 49px;
  background: #ffffff;
  border-radius: 6px;
  display: flex;
}

.reset {
  width: 100%;
  height: 49px;
  background: #ffffff;
  border-radius: 6px 0 0 6px;
}

.setValue {
  background: #c3ffd7;
  width: 100%;
  height: 49px;
  background: #ffffff;
  border-radius: 0 6px 6px 0;
}
</style>
