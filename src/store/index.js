import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      lang: "en",
      orderTitle: "",
      orderInfo: "",
    };
  },
  getters: {

  },
  mutations: {
    updateLang(state, value) {
      state.lang = value;
    },
    completeOrder(state, orderData) {
      state.orderTitle = orderData.title;
      state.orderInfo = orderData.info;
    },
  },
});
