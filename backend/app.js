const express = require('express')
const { join } = require('path')

const dbs = require(join(__dirname, 'dbs.js'))

dbs()

const app = express()
const cors = require('cors')
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  })
)

const PORT = process.env.PORT || 4000
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${PORT}`

app.use(express.json())

const mainRouter = require(join(__dirname, 'routes', 'mainRouter.js'))
const editRouter = require(join(__dirname, 'routes', 'editRouter.js'))
const addRouter = require(join(__dirname, 'routes', 'addRouter.js'))
const deleteRouter = require(join(__dirname, 'routes', 'deleteRouter.js'))

app.use('/', mainRouter)
app.use('/edit', editRouter)
app.use('/add', addRouter)
app.use('/delete', deleteRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
