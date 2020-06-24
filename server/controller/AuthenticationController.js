const { db } = require('./connection')

module.exports = {
  async authenticate(req, res) {
    const users = (await db()).collection('users')
    if (req.body.newUser) {
      if ((await users.findOne({ 'email': req.body.email })) === null) {
        users.insertOne(req.body, function (err) {
          if (err) { console.error(err) }
          res.send(true)
        })
      } else {
        res.send(false)
      }
    } else {
      if ((await users.findOne({ 'email': req.body.email, 'password': req.body.password }) === null)) {
        res.send(false)
      } else {
        res.send(true)
      }
    }
  }
}