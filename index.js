require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000
const { dbConnect } = require('./config/mongo')

app.use(cors())
app.use(express.json())
app.use('/api', require('./src/routes'))

dbConnect()
app.listen(PORT, () => {
  console.log('App running on PORT', PORT)
})
