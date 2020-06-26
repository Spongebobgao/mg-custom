import Api from '@/services/Api'

export default {
  authenticate(user) {
    return Api().post('/checkout/sign-in', user)
  },
  insertOrder(user) {
    return Api().put('/checkout/fullfillment', user)
  }
}