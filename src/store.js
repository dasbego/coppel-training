import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products
        .find(product => product.id === id)
    }
  },
  mutations: {
    updateProducts (state, products) {
      state.products = products
    },
    addToCart (state, id) {
      state.products = state.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product;
      });
    },
    addNewProduct (state, newProduct) {
      state.products.push({
        id: state.products.length + 1,
        ...newProduct,
      });
    }
  },
  actions: {
    fetchProducts (context) {
      Axios.get('https://api.myjson.com/bins/hoto8')
      .then((response) => {
        context.commit('updateProducts',
          response.data.products)
      })
    }
  }
})
