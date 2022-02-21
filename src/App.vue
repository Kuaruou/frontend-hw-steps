<template>
  <navbar />
  <checkout />
</template>

<script>
import checkout from "./views/checkout/Main.vue";
import navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    navbar,
    checkout,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import "./assets/scss/all.scss";
</style>
