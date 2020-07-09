import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    numberOfProductsInCart: 0,
    totalOfProductsInCart: 0,
    productsInCart: {},
    hoverCart: false,
    user: null,
    orderHistory: [],
  },
  mutations: {
    addItemInCart(state, payload) {
      if (state.productsInCart[payload[0]._id]) {
        if (state.productsInCart[payload[0]._id].quantity === -payload[1]) {
          delete state.productsInCart[payload[0]._id]
        } else {
          state.productsInCart[payload[0]._id] = {
            ...state.productsInCart[payload[0]._id],
            total: parseFloat(
              (
                state.productsInCart[payload[0]._id].total +
                payload[0].price * payload[1]
              ).toFixed(2)
            ),
            quantity:
              state.productsInCart[payload[0]._id].quantity + payload[1],
          }
        }
      } else {
        state.productsInCart[payload[0]._id] = {
          ...payload[0],
          quantity: payload[1],
          total: parseFloat((payload[0].price * payload[1]).toFixed(2)),
        }
      }
      state.numberOfProductsInCart += parseInt(payload[1])
      state.totalOfProductsInCart = parseFloat(
        (state.totalOfProductsInCart + payload[0].price * payload[1]).toFixed(2)
      )
    },
    changeHoverCart(state, payload) {
      state.hoverCart = payload
    },
    userLoggedIn(state, payload) {
      state.user = payload
    },
    clearCart(state) {
      ;(state.numberOfProductsInCart = 0),
        (state.totalOfProductsInCart = 0),
        (state.productsInCart = {})
    },
    orderHistory(state, payload) {
      state.orderHistory = payload
      state.orderHistory.sort(function(a, b) {
        return new Date(b.date) - new Date(a.date)
      })
      state.orderHistory = state.orderHistory.map((order) => {
        return {
          ...order,
          date: order.date.split('T')[0],
        }
      })
    },
    addOrderToHistory(state, payload) {
      payload = {
        ...payload,
        date: new Date(payload.date).toISOString().split('T')[0],
      }
      console.log(payload.date)
      state.orderHistory.unshift(payload)
    },
    logout(state) {
      state.user = null
      state.orderHistory = []
    },
  },
})
