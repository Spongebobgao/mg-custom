import Api from '@/services/Api'

export default {
  register(user) {
    return Api().post(`/checkout/sign-in`, user)
  },
  signIn(user) {
    return Api().get('/checkout/sign-in', user)
  }
}