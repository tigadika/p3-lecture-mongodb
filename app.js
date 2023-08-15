const express = require('express')
const userRouter = require('./routes/user')
const app = express()
const port = 3000
const { connect } = require('./configs/mongoConnection');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get('/', (req, res) => res.json('Hello World'))
app.use('/users', userRouter)


connect().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})