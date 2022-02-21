<template>
  <div class="nav" data-test="navbar">
    <div class="nav-item" data-test="nav-item">
      <a>
        <i class="fa-regular fa-circle-question"></i>
        HELP
      </a>
    </div>
    <div class="nav-item" data-test="nav-item">
      <a>
        <i class="fa-regular fa-circle-user"></i>
        SIGN IN
      </a>
    </div>
    <div class="nav-item" data-test="nav-item">
      <i class="fa-regular fa-flag"></i>
      <select name="" v-model="lang" data-test="lang-select">
        <option value="en">EN</option>
        <option value="zh_CN">CN</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    lang: {
      get() {
        return this.$store.state.lang;
      },
      set(value) {
        this.$store.commit("updateLang", value);
      },
    },
  },
};
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  margin-right: 10px;
  @media (max-width: 767px) {
    justify-content: center;
  }
}

.nav-item {
  font-size: 24px;
  color: black;
  padding-right: 10px;
  padding-left: 10px;

  a {
    font-size: 16px;
  }

  i {
    font-size: 16px;
    color: #1aa0e2;
    margin-right: 3px;
  }

  select {
    background-color: #f1f1f0;
    border: none;
    font-size: 16px;
  }
}
</style>
