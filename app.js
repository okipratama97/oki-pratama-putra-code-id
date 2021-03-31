if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = require('./config/constants')
const { connect } = require('./config/mongodb')
const userRoute = require('./routes/user')
const tokenRoute = require('./routes/token')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRoute)
app.use('/token', tokenRoute)
app.use(errorHandler)

connect().then(async () => {
  app.listen(PORT, () => {
    console.log(`Service listening at http://localhost:${PORT}`)
  })
})
