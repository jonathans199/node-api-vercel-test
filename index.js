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

app.get('/about', (req, res) => {
  res.send('this is the about page in vercel so what')
})

// room 1 - /about route and serve /about/about.html
// room 2 - /contact route and serve /contact/contact.html
// room 3 - /services route and serve /services/services.html
// room 4 - /products route and serve /products/products.html
// room 5 - /login route and serve /login/login.html
// room 6 - /portfolio route and serve /portfolio/portfolio.html

// Export the Express API
module.exports = app
