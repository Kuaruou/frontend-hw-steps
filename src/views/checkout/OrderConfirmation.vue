<template>
  <steps :step1Done="step1Done" :step2Done="step2Done" />

  <div class="form-container" :class="step">
    <div class="form-header" data-test="form-header">
      {{ title }}
    </div>
    <div>
      <img
        class="form-img"
        src="../../../src/assets/images/certificate.png"
        alt=""
      />
    </div>
    <div class="form-info" data-test="form-info">
      {{ info }}
    </div>
    <div class="inner-container">
    </div>
  </div>
</template>

<script>
import steps from "../../components/Steps.vue";
export default {
  name: "Payment",
  components: {
    steps,
  },
  data() {
    return {
      step: "step3",
      step1Done: true,
      step2Done: true,
    };
  },
  computed: {
    title() {
      return this.$store.state.orderTitle;
    },
    info() {
      return this.$store.state.orderInfo;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/form.scss";
@import "../../assets/scss/steps.scss";

.form-img {
  height: 60px;
  padding: 30px;
}
</style>
