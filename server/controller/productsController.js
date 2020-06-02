const dbConnection = require('./connection')

module.exports = {
  async getAllProducts(req, res) {
    (await dbConnection.db()).collection('products').find({}).toArray(function (err, docs) {
      if (err) { console.error(err) }
      res.send(docs)
    })
  }

}