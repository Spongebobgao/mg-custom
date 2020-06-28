import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products'
import Product from '../views/Product'
import Cart from '../views/Cart'
import Checkout from '../views/Checkout'
import DeliveryOptions from '../views/DeliveryOptions'
import Account from '../views/Account'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
