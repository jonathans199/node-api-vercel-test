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

// team 1 - /about route and serve /about/about.html
// team 2 - /contact route and serve /contact/contact.html
// team 3 - /services route and serve /services/services.html
// team 4 - /products route and serve /products/products.html
// team 5 - /login route and serve /login/login.html
