<template>
  <router-view></router-view>
</template>

<script>
// import navbar from "../components/Navbar.vue";

export default {
  name: "App",
  components: {
  },
  data() {
    return {
      
    }
  },
  computed: {
    isHome() {
      const currentPathname = window.location.pathname;
      if(currentPathname === '/') {
        return true;
      }
      return false;
    },
  },
};
</script>