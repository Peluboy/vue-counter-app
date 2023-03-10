<template>
  <div class="container">
    <header>
      <router-link to="/">Home</router-link>
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
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.container {
  display: flex;
  padding: 2rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
