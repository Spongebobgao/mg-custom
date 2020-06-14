import Api from '@/services/Api'

export default {
  register(user) {
    return Api().post(`/checkout/sign-in`, user)
  }
}