const dbConnection = require('./controller/connection')
const products = require('./controller/productsController')

module.exports = (app) => {
  app.get('/', products.getAllProducts)
}