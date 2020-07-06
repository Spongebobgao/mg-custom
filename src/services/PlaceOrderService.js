import Api from '@/services/Api'

export default {
  placeOrder(orderAndAddress) {
    return Api().post('/checkout/fullfillment', orderAndAddress)
  },
}
