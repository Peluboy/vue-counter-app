<template>
  <div class="container">
    <header>
      <router-link to="/"><img src="./assets/myLogo.svg" /></router-link>
    </header>

    <main>
      <router-view />
    </main>

    <footer>&copy; 2023 Peluboy</footer>
  </div>
</template>

<script>
export default {
  name: "App",
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
.container {
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  height: 90vh;
  align-items: center;
  justify-content: space-between;
}

input {
  outline: none;
  border: none;
  padding: 0 1.3rem;
  height: 30px;
  font-size: 15px;
  margin: auto;
  border-left: 2px solid #ccc;
  border-right: 2px solid #d9d9d9;
}

input::placeholder {
  font-weight: 400;
  font-size: 15px;
  line-height: 0;
  color: #ebe7eb;
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
</style>
