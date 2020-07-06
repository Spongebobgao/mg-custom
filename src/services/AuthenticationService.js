import Api from '@/services/Api'

export default {
  authenticate(user) {
    return Api().post('/checkout/sign-in', user)
  },
  getUserAddress(userId) {
    return Api().get('/checkout/fullfillment', { headers: { userId } })
  },
}
