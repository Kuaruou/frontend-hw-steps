<template>
  <navbar />
  <checkout />
</template>

<script>
import checkout from "./views/Checkout/Main.vue";
import navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    navbar,
    checkout,
  },
  mounted() {
    // this.getData()
  },
   methods: {
    // getData() {
    //   const vm = this
    //   fetch("https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f")
    //     .then(async res => {
    //       const data = await res.json()
    //       vm.$data.checkoutData = data

    //       console.log(vm.$data)
    //     })
    //     .catch(error => {
    //       console.error("There was an error!", error);
    //     })
    // },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f1f1f0;
  height: 100vh;
}

body {
  margin: 0px;
}

@import "./assets/scss/all.scss";
</style>
