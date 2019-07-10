import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import ProductsList from '@/components/ProductsList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const mockStore = {
  state: {
    products: [
      {
        id: '1',
        name: 'Producto',
        quantity: 1,
        price: 100,
      }
    ]
  },
  mutations: {
    addToCart: jest.fn(),
    addNewProduct: jest.fn()
  },
}

describe('ProductsList Component', () => {
  it('Matches snapshot', () => {
    const wrapper = shallowMount(ProductsList, {
      mocks: {
        $store: mockStore
      },
      localVue,
    })
    expect(wrapper).toMatchSnapshot()
  })
})
