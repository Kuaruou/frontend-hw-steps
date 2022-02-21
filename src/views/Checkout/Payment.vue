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
      <form action="" @submit.prevent="payByCreditCard">
        <div class="payment-container">
          <div class="payment-header">
            <div class="header-icon">
              <img
                src="https://www.freeiconspng.com/uploads/credit-card-black-png-0.png"
                alt=""
              />
            </div>
            <div class="header-title" data-test="inner-title">
              {{ paymentTitle }}
            </div>
          </div>
          <div class="payment-info" data-test="inner-info">
            {{ paymentInfo }}
          </div>
          <div class="available-cards">
            <img
              class="payment-img"
              src="../../assets/images/mastercard.png"
              alt=""
            />
            <img
              class="payment-img"
              src="../../assets/images/visa.png"
              alt=""
            />
          </div>
        </div>
        <div class="form-buttons">
          <div class="form-button" data-test="form-button">
            <button type="button">
              <router-link to="/checkout/step-1-my-data">
                <i class="fas fa-angle-left"></i>
                Back
              </router-link>
            </button>
          </div>
          <div class="form-button" data-test="form-button">
            <button type="submit">
              Pay
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
export default {
  name: "Payment",
  components: {
    steps,
  },
  data() {
    return {
      title: "Payment",
      info: "After making the payment you will recieve a confirmation email with details of your purchase",
      currentStep: "step2",
      step1Done: true,
      step2Done: false,
      paymentTitle: "Credit Card",
      paymentInfo: "You will be redirected to a secure payment platform. This is a secure process. The validation of your payment can take up to 24 hours.",
    };
  },
  methods: {
    payByCreditCard() {
      const vm = this;
      let checkoutData = {};
      fetch("https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f")
        .then(async (res) => {
          const data = await res.json();
          checkoutData = data;
          const title = checkoutData.title;
          const message = checkoutData.message;
          const lang = this.$store.state.lang;
          const orderTitle = title[lang];
          const orderInfo = message[lang];
          const orderData = {};
          orderData.title = orderTitle;
          orderData.info = orderInfo;
          this.$store.commit("completeOrder", orderData);
          vm.$router.push("/checkout/step-3-order-confirmation");
        })
        .catch((error) => {
          console.error("There was an error!", error);
          window.alert("Transaction failed, please try later!");
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/form.scss";
@import "../../assets/scss/steps.scss";

.payment-container {
  border: 1px solid lightgray;
}

.header-icon {
  margin: 5px;
  img {
    height: 50px;
  }
}

.payment-title {
  font-size: 24px;
}

.payment-info {
  font-size: 12px;
  padding: 10px;
}

.payment-img {
  width: 45px;
  height: 40px;
  margin: 5px;
}
</style>
