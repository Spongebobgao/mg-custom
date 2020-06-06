import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    numberOfProductsInCart: 0,
    productsInCart: {}
  },
  mutations: {
    addItemInCart(state, product) {
      if (state.productsInCart[product._id]) {
        state.productsInCart[product._id] = {
          ...state.productsInCart[product._id],
          total: parseFloat((state.productsInCart[product._id].total + product.price).toFixed(2)),
          quantity: state.productsInCart[product._id].quantity + 1
        }
      } else {
        state.productsInCart[product._id] = {
          ...product,
          quantity: 1,
          total: product.price
        }
      }
      state.numberOfProductsInCart++
    }
  }
})