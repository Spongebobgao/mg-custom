import Api from '@/services/Api'

export default {
  placeOrder(orderAndAddress) {
    return Api().post('/checkout/fullfillment', orderAndAddress)
  },
  getUserOrder(id) {
    return Api().get('/checkout/sign-in', { headers: { id } })
  },
}
