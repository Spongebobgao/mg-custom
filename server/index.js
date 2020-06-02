require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')//logging

const app = express()

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

require('./routes')(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server starts on ${port}`)
});
