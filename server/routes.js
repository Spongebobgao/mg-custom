
const products = require('./controller/productsController')
const homeSlide = require('./controller/homeSlideController')

module.exports = (app) => {
  app.get('/', homeSlide.getSlideShowImages)
  app.get('/products', products.getAllProducts)
}