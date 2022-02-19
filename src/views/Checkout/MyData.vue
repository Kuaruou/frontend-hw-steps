<template>
  <steps
    :step1Done="step1Done"
    :step2Done="step2Done"
  />

  <div class="form-container" :class="currentStep">
    <div class="form-header">
      {{title}}
    </div>
    <div class="form-info">
      {{info}}
    </div>
    <div class="inner-container">
      <form action="" @submit.prevent="goToPayment">
        <div class="form-input">
          <div class="input-title">
            Name*
          </div>
          <input type="text" v-model="firstName">
          <div class="error-container">
            <span class="error-message" v-if="v$.firstName.$error">
              {{ v$.firstName.$errors[0].$message }}
            </span>
          </div>
        </div>
        <div class="form-input">
          <div class="input-title">
            Last Name*
          </div>
          <input type="text" v-model="lastName">
          <div class="error-container">
            <span class="error-message" v-if="v$.lastName.$error">
              {{ v$.lastName.$errors[0].$message }}
            </span>
          </div>
        </div>
        <div class="form-buttons">
          <div class="form-button">
            <button class="hidden-item"></button>
          </div>
          <div class="form-button">
            <button type="submit">
              continue
              <i class="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import steps from "../../components/Steps.vue"
import useVuelidate from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'
export default {
  name: "MyData",
  components: {
    steps,
  },
  validations() {
    return {
      firstName: { required, minLength: minLength(6) },
      lastName: { required, minLength: minLength(6) },
    }
  },
  data() {
    return {
      title: 'My Data',
      info: 'Please enter your personal data and press continue',
      currentStep: 'step1',
      step1Done: false,
      step2Done: false,
      firstName: '',
      lastName: '',
      v$: useVuelidate()
    };
  },
  methods: {
    goToPayment() {
      this.v$.$validate()
      if (!this.v$.$error) {
        const vm = this
        vm.$router.push('/checkout/step-2-payment')
      } else {
        alert('Failed validation!!')
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/form.scss";
@import "../../assets/scss/steps.scss";
</style>
