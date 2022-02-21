import { shallowMount } from '@vue/test-utils'
import OrderConfirmation from '../../../src/views/checkout/OrderConfirmation.vue'
import $store from '../../../src/store/index'
import Payment from '../../../src/views/checkout/Payment.vue'
import {fetch as fetchPolyfill} from 'whatwg-fetch'

describe("OrderConfirmation.vue", () => {
  const paymentWrapper = shallowMount(Payment)
  const wrapper = shallowMount(OrderConfirmation, {
    global: {
      plugins: [$store]
    }
  })

  it("should have correct title and info", () => {
    const fetch = fetchPolyfill
    paymentWrapper.vm.payByCreditCard()

    expect(wrapper.find('[data-test="form-header"]').text()).toBe('Order Created')
    expect(wrapper.find('[data-test="form-info"]').text()).toBe('Congratulations, your payment was successful. Shortly a confirmation email will arrive to your inbox')
  })
})