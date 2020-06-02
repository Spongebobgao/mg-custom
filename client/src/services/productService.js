import Api from '@/services/Api'

export default {
  getAllProducts() {
    return Api().get(`/`)
  }
}