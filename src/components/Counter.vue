<template>
  <div class="counterContainer">
    <h1>Counter Stepper</h1>
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
    <Toggle :mode="mode" @toggle="$emit('toggle')" />
  </div>
</template>

<script>
import useCounter from "@/composables/counter.js";
import { computed, ref } from "vue";
import Toggle from "@/components/Toggle.vue";

export default {
  name: "CounterStepper",
  props: {
    mode: {
      type: String,
      required: true,
    },
  },
  components: {
    Toggle,
  },
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
.counterContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counterContainer > h1 {
  margin-bottom: 3rem;
}
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
  transition: background 0.3s ease-in-out;
}

.dark .increment_decrement {
  background-color: #1d1d1d;
}

.minus {
  background: #ebe7eb;
}

.dark .minus {
  background: #363636;
}

.plus {
  background: #c3ffd7;
}

.dark .plus {
  background: #3d4841;
}
.increment_decrement > h1 {
  font-weight: 400;
  font-size: 60px;
  line-height: 0;
  color: #626262;
}

.dark .input_field,
.dark .reset,
.dark .setValue {
  background-color: #1d1d1d;
}
.input_field {
  margin-top: 2rem;
  width: 400px;
  height: 49px;
  background: #ffffff;
  border-radius: 6px;
  display: flex;
  margin-bottom: 4rem;
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

@media screen and (max-width: 768px) {
  .increment_decrement {
    width: 300px;
  }

  .input_field {
    width: 320px;
  }
  .increment_decrement > h1 {
    font-size: 45px;
  }
}
</style>
