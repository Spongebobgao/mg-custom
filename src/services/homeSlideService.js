import Api from '@/services/Api'

export default {
  getSlideShowImgs() {
    return Api().get(`/`)
  }
}