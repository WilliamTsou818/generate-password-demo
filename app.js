// setting express
const express = require('express')
const port = 3000
const app = express()
const generatePassword = require('./generate_password')



// setting template engine
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting body-parser
app.use(express.urlencoded({ extended: true }))

// setting route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const password = generatePassword(req.body)
  res.render('index', { password: password })
})

// listening server
app.listen(port, () => {
  console.log('The server is running')
})