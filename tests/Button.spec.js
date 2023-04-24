import { shallowMount } from "@vue/test-utils"
import Button from '../src/components/Button/Button.vue'

describe('Should load component', () => {
  it('Should mount component', () => {
    const wrapper = shallowMount(Button)
    expect(wrapper.vm).toBeTruthy()
  })
})