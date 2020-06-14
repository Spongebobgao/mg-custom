const { db } = require('./connection')

module.exports = {
  async register(req, res) {
    const users = (await db()).collection('users')
    console.log(await users.findOne({ 'email': req.body.email }))
    if ((await users.findOne({ 'email': req.body.email })) === null) {
      users.insertOne(req.body, function (err) {
        if (err) { console.error(err) }
        res.send(true)
      })
    } else {
      res.send(false)
    }
  }
}