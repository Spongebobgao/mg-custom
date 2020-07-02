import Api from '@/services/Api'

export default {
  placeOrder(order) {
    return Api().post('/checkout/fullfillment', order)
  },
}
