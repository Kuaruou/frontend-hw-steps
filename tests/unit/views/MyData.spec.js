import { shallowMount } from '@vue/test-utils'
import MyData from '../../../src/views/checkout/MyData.vue'

describe("MyData.vue", () => {
  const wrapper = shallowMount(MyData)

  it("should have correct title, info and button", () => {
    expect(wrapper.find('[data-test="form-header"]').text()).toBe('My Data')
    expect(wrapper.find('[data-test="form-info"]').text()).toBe('Please enter your personal data and press continue')
    expect(wrapper.find('button').text()).toBe('continue')
  })

  it("should show error msg when click continue button with no value", async () => {
    await wrapper.find('button').trigger('click')

    expect(wrapper.findAll('[data-test="error-message"]')).toHaveLength(2)
    expect(wrapper.findAll('[data-test="error-message"]').at(0).text()).toBe('Value is required')
    expect(wrapper.findAll('[data-test="error-message"]').at(1).text()).toBe('My Data')
  })

  // it("should show error msg when click continue button with not enough length", async () => {
  //   await wrapper.find('[data-test="first-name-input"]').setValue('jest')
  //   await wrapper.find('[data-test="last-name-input"]').setValue('jest')
  //   await wrapper.find('[data-test="continue-button"]').trigger('click')
    
  //   expect(wrapper.findAll('[data-test="error-message"]').at(0).text()).toBe('Value is required')
  //   expect(wrapper.findAll('[data-test="error-message"]').at(1).text()).toBe('My Data')
  // })
})
