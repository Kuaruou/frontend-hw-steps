<template>
  <div class="steps">
    <div class="step">
      <div v-if="step1Done" class="step-done">
        <div class="step-head">
          <div class="step-check">
            <i class="fa-solid fa-check"></i>
          </div>
        </div>
      </div>
      <div v-else class="step-head">
        <div class="step-number">
          1
        </div>
      </div>
      <div class="step-name">
        {{ step1 }}
      </div>
    </div>
    <div class="dotted-line"></div>
    <div class="step">
      <div v-if="step2Done" class="step-done">
        <div class="step-head">
          <div class="step-check">
            <i class="fa-solid fa-check"></i>
          </div>
        </div>
      </div>
      <div v-else class="step-head">
        <div class="step-number">
          2
        </div>
      </div>
      <div class="step-name">
        {{ step2 }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
  components: {
  },
  props: {
    step1Done: Boolean,
    step2Done: Boolean,
  },
  data() {
    return {
      step1: "My Data",
      step2: "Payment",
    };
  },
};
</script>