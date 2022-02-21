import { mount } from '@vue/test-utils'
import Steps from '../../../src/components/Steps'

describe("Steps.vue", () => {
  const wrapper = mount(Steps)

  it("should have 2 steps", () => {
    expect(wrapper.findAll('[data-test="step-head"]')).toHaveLength(2)
  })

  it("should show 1 and 2 on step-heads in 1st step", async () => {
    await wrapper.setProps({
      step1Done: false,
      step2Done: false,
    })

    expect(wrapper.findAll('[data-test="step-head"]').at(0).text()).toContain('1')
    expect(wrapper.findAll('[data-test="step-head"]').at(1).text()).toContain('2')
    expect(wrapper.findAll('[data-test="step-check"]')).toHaveLength(0)
  })

  it("should show step1 checked and step2 unchecked on 2nd step", async () => {
    await wrapper.setProps({
      step1Done: true,
      step2Done: false,
    })

    expect(wrapper.findAll('[data-test="step-head"]').at(0).text()).toContain('')
    expect(wrapper.findAll('[data-test="step-head"]').at(1).text()).toContain('2')
    expect(wrapper.findAll('[data-test="step-check"]')).toHaveLength(1)
  })

  it("should show step1 checked and step2 checked on 3rd step", async () => {
    await wrapper.setProps({
      step1Done: true,
      step2Done: true,
    })

    expect(wrapper.findAll('[data-test="step-head"]').at(0).text()).toContain('')
    expect(wrapper.findAll('[data-test="step-head"]').at(1).text()).toContain('')
    expect(wrapper.findAll('[data-test="step-check"]')).toHaveLength(2)
  })
})