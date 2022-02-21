import { shallowMount } from '@vue/test-utils'
import Payment from '../../../src/views/checkout/Payment.vue'

describe("MyData.vue", () => {
  const wrapper = shallowMount(Payment)

  it("should have correct title and info", () => {
    expect(wrapper.find('[data-test="form-header"]').text()).toBe('Payment')
    expect(wrapper.find('[data-test="form-info"]').text()).toBe('After making the payment you will recieve a confirmation email with details of your purchase')
  })

  it("should have correct inner-title and inner-info", () => {
    expect(wrapper.find('[data-test="inner-title"]').text()).toBe('Credit Card')
    expect(wrapper.find('[data-test="inner-info"]').text()).toBe('You will be redirected to a secure payment platform. This is a secure process. The validation of your payment can take up to 24 hours.')
  })

  it("should have correct buttons", () => {
    expect(wrapper.findAll('[data-test="form-button"]')).toHaveLength(2)
    expect(wrapper.findAll('[data-test="form-button"]').at(0).text()).toBe('Back')
    expect(wrapper.findAll('[data-test="form-button"]').at(1).text()).toBe('Pay')
  })
})