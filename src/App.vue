<template>
  <div class="container" :class="mode">
    <header>
      <router-link to="/"><img src="./assets/myLogo.svg" /></router-link>
    </header>

    <main>
      <router-view :mode="mode" @toggle="toggle" />
    </main>

    <footer>&copy; 2023 Peluboy</footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mode: "light",
    };
  },
  methods: {
    toggle() {
      if (this.mode == "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");
body,
html,
#app {
  margin: 0;
  padding: 0;
  background-color: #fafafa;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
}

.dark {
  background: #141414;
  color: #6a6a6a;
}

.dark header a img {
  filter: brightness(0) invert(0.5);
}
.container {
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  min-height: 91.5vh;
  align-items: center;
  justify-content: space-between;
  transition: background 0.3s ease-in-out;
}

.dark input {
  background-color: #1d1d1d;
  border-left: 2px solid #363636;
  color: #6a6a6a;
  border-right: 2px solid #363636;
}

input {
  outline: none;
  border: none;
  padding: 0 1.3rem;
  height: 30px;
  font-size: 15px;
  margin: auto;
  border-left: 2px solid #d9d9d9;
  border-right: 2px solid #d9d9d9;
}

input::placeholder {
  font-weight: 400;
  font-size: 15px;
  line-height: 0;
  color: #ebe7eb;
}

.dark input::placeholder {
  color: #4a4a4a;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

button {
  height: 70px;
  cursor: pointer;
  width: 70px;
  font-size: 14px;
  font-weight: 500;
  color: #a0a0a0;
  /* border-radius: 8px; */
  outline: none;
  border: none;
}

@media screen and (max-width: 768px) {
  input {
    padding-left: 0.7rem;
    padding-right: 0;
    width: 160px;
  }
  button {
    font-size: 11px;
  }

  input::placeholder {
    font-size: 12px;
  }
}
</style>
