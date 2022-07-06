const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/home/home.html'))
})
