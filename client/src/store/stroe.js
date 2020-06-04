import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    itemNumberInCart: 0
  },
  mutations: {
    increment(state) {
      state.itemNumberInCart++
    }
  }
})