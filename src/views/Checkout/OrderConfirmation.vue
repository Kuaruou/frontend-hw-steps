<template>
  <steps
    :step1Done="step1Done"
    :step2Done="step2Done"
  />

  <div class="form-container" :class="step">
    <div class="form-header">
      {{ title }}
    </div>
    <div>
      <img class="form-img" src="../../../src/assets/images/certificate.png" alt="">
    </div>
    <div class="form-info">
      {{ info }}
    </div>
      <div class="inner-container">
        <!-- <form action="">
          <div class="payment-container">
            <div class="payment-header">
              <div class="header-icon">
                <img src="https://www.freeiconspng.com/uploads/credit-card-black-png-0.png" alt="">
              </div>
              <div class="header-title">
                Credit Card
              </div>
            </div>
            <div class="payment-info">
              {{ paymentInfo }}
            </div>
            <div class="available-cards">
              <img class="payment-img" src="../../assets/images/mastercard.png" alt="">
              <img class="payment-img" src="../../assets/images/visa.png" alt="">
            </div>
          </div>
          <div class="form-buttons">
            <div class="form-button">
              <button>
                <router-link to="/checkout/step-1-my-data">
                  <i class="fas fa-angle-left"></i>
                  Back
                </router-link>
              </button>
            </div>
            <div class="form-button">
              <button>
                <router-link to="/checkout/step-3-order-confirmation">
                  Pay
                  <i class="fas fa-angle-right"></i>
                </router-link>
              </button>
            </div>
          </div>
        </form> -->
      </div>
  </div>
</template>

<script>
import steps from "../../components/Steps.vue"
export default {
  name: "Payment",
  components: {
    steps,
  },
  data() {
    return {
      title: "Order Created",
      info: "Congratulation, your payment was successful. Shortly a confirmation email will arrive to your inbox.",
      step: "step3",
      step1Done: true,
      step2Done: true,
    };
  },
  mounted() {
  }
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
