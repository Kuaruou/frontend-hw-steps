import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "@/router"
import App from '../../../src/App.vue'
import MyData from '../../../src/views/checkout/MyData.vue'
// import Payment from '../../../src/views/checkout/Payment.vue'
// import OrderConfirnmation from '../../../src/views/checkout/OrderConfirnmation.vue'
import $store from '../../../src/store/index'

// let router;
// beforeEach(async () => {
//   router = createRouter({
//     history: createWebHistory(),
//     routes: routes,
//   })
// });

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

test('routing test', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router, $store]
    }
  })

  router.push('/')
  await router.isReady()

  expect(wrapper.find(MyData).exists()).toBe(true);

  // expect(wrapper.html()).toContain('Welcome to the blogging app')
})