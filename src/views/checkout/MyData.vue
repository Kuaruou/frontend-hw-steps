<template>
  <steps :step1Done="step1Done" :step2Done="step2Done" />

  <div class="form-container" :class="currentStep">
    <div class="form-header" data-test="form-header">
      {{ title }}
    </div>
    <div class="form-info" data-test="form-info">
      {{ info }}
    </div>
    <div class="inner-container">
      <form action="" @submit.prevent="goToPayment">
        <div class="form-input">
          <div class="input-title">Name*</div>
          <input type="text" v-model="firstName" data-test="first-name-input"/>
          <div class="error-container">
            <span class="error-message" v-if="firstNameErrorMsg" data-test="error-message">
              {{ firstNameErrorMsg }}
            </span>
          </div>
        </div>
        <div class="form-input">
          <div class="input-title">Last Name*</div>
          <input type="text" v-model="lastName" data-test="last-name-input"/>
          <div class="error-container">
            <span class="error-message" v-if="lastNameErrorMsg" data-test="error-message">
              {{ lastNameErrorMsg }}
            </span>
          </div>
        </div>
        <div class="form-buttons">
          <div class="form-button"></div>
          <div class="form-button">
            <button type="submit" data-test="continue-button">
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
import steps from "../../components/Steps.vue";
import useVuelidate from "@vuelidate/core";
import { minLength, required } from "@vuelidate/validators";
export default {
  name: "MyData",
  components: {
    steps,
  },
  validations() {
    return {
      firstName: { required, minLength: minLength(6) },
      lastName: { required, minLength: minLength(6) },
    };
  },
  data() {
    return {
      title: "My Data",
      info: "Please enter your personal data and press continue",
      currentStep: "step1",
      step1Done: false,
      step2Done: false,
      firstName: "",
      lastName: "",
      v$: useVuelidate(),
      firstNameError: '',
      lastNameError: '',
    };
  },
  computed: {
    firstNameErrorMsg() {
      return this.firstNameError || "";
    },
    lastNameErrorMsg() {
      return this.lastNameError || "";
    },
  },
  methods: {
    goToPayment() {
        const vm = this;
        if(this.validate()) {
          vm.$router.push("/checkout/step-2-payment");
        }
    },
    validate() {
      const vm = this
      const firstName = vm.$data.firstName
      const lastName = vm.$data.lastName
      let firstNameError = vm.$data.firstNameError
      let lastNameError = vm.$data.lastNameError
      firstNameError = ''
      lastNameError = ''
      if (firstName === "") {
        firstNameError = "Value is required"
      } else if (firstName.length < 6) {
        firstNameError = "This field should be at least 6 long"
      }

      if (lastName === "") {
        lastNameError = "Value is required"
      } else if (lastName.length < 6) {
        lastNameError = "This field should be at least 6 long"
      }

      this.$data.firstNameError = firstNameError
      this.$data.lastNameError = lastNameError

      const noValue = firstName === "" || lastName === ""
      const wrongLength = firstName < 6 || lastName.length < 6
      if (noValue || wrongLength) {
        window.alert('Failed validation!!')
        return false
      }

      return true
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/form.scss";
@import "../../assets/scss/steps.scss";
@import "../../assets/scss/all.scss";
</style>
