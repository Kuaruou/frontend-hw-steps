import { mount } from '@vue/test-utils'
import Navbar from '../../../src/components/Navbar'
import $store from '../../../src/store/index'

describe("Navbar.vue", () => {
  const wrapper = mount(Navbar, {
    global: {
      plugins: [$store]
    }
  })

  // const wrapper = mount(Navbar)

  it("should has 3 nav-items", () => {
    expect(wrapper.findAll('[data-test="nav-item"]')).toHaveLength(3)
  })
  
  it("should 1st nav-item text be HELP", () => {
    expect(wrapper.findAll('[data-test="nav-item"]').at(0).text()).toBe('HELP')
  })

  it("should 2nd nav-item text be SIGN IN", () => {
    expect(wrapper.findAll('[data-test="nav-item"]').at(1).text()).toBe('SIGN IN')
  })

  it("should 3rd nav-item text be EN", () => {
    expect(wrapper.findAll('[data-test="nav-item"]').at(2).text()).toContain('EN')
  })
  
  it("should lang select default value be en", () => {
    const langSelect = wrapper.find('select')
    expect(langSelect.element.value).toBe('en')
  })

  it("should lang select has 2 options", () => {
    const langSelect = wrapper.find('select')
    expect(langSelect.findAll('option')).toHaveLength(2)
  })

  it("should lang select change and has correct value", async () => {
    const langSelect = wrapper.find('select')
    await wrapper.find('select').setValue('zh_CN')
    expect(langSelect.element.value).toBe('zh_CN')
  })
})