import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products'
import Product from '../views/Product'
import Cart from '../views/Cart'
import Checkout from '../views/Checkout'
import DeliveryOptions from '../views/DeliveryOptions'
import Account from '../views/Account'
import About from '../views/About'

import { store } from '../store/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/checkout/sign-in',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/checkout/fullfillment',
    name: 'DeliveryOptions',
    component: DeliveryOptions,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (Object.keys(store.state.productsInCart).length === 0) {
    if (to.name === 'Checkout' || to.name === 'DeliveryOptions') {
      next({
        name: 'Home',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
