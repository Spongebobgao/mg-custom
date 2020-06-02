import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    itemCount: 0
  },
  mutations: {
    increment(state) {
      state.itemCount++
    }
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
