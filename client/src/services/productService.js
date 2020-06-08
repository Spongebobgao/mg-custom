import Api from '@/services/Api'

export default {
  getAllProducts() {
    return Api().get(`/products`)
  },
  getProductById(id) {
    return Api().get(`/products/${id}`)
  }
}