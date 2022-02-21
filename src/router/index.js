import { createRouter, createWebHistory } from "vue-router";
import Checkout from "../views/checkout/Main.vue";
import MyData from "../views/checkout/MyData.vue";
import Payment from "../views/checkout/Payment.vue";
import OrderConfirmation from "../views/checkout/OrderConfirmation.vue";

const routes = [
  {
    path: "/:catchAll(.*)",
    redirect: "/checkout/step-1-my-data",
  },
  {
    path: "/checkout",
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
