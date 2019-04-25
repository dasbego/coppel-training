import { shallowMount } from '@vue/test-utils'
import ProductsList from '@/components/ProductsList.vue'

describe('ProductsList Component', () => {
  it('Matches snapshot', () => {
    const wrapper = shallowMount(ProductsList)
    expect(wrapper).toMatchSnapshot()
  })
})
