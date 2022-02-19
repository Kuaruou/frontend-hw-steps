import { createRouter, createWebHistory } from "vue-router";
import Checkout from "..//views/Checkout/Main.vue";
import MyData from "../views/Checkout/MyData.vue";
import Payment from "../views/Checkout/Payment.vue";
import OrderConfirmation from "../views/Checkout/OrderConfirmation.vue";

const routes = [
  {
    path: "/",
    redirect: '/checkout/step-1-my-data'
  },
  { path: "/checkout",
    redirect: "/checkout/step-1-my-data",
    name: "Checkout",
    component: Checkout,
    children: [
      { path: "step-1-my-data", component: MyData },
      { path: "step-2-payment", component: Payment },
      { path: "step-3-order-confirmation", component: OrderConfirmation },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
