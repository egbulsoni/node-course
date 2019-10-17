const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Eduardo Bulsoni'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: "this is the help message",
        title: 'Help',
        name: 'Eduardo Bulsoni'
    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Eduardo Bulsoni'        
    })

})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide an address!"
        })
    }

    // console.log(req.query.address)
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {    
        if (error){
          // stop execution and print msg
          return res.send({ error })
        }
    
        forecast(latitude, longitude, (error, forecastData) => {
          if (error){
            return res.send({ error })
          }
      
          res.send({
            forecast: forecastData,
            location,
            address: req.query.address
            })
        })
      })
    
})

app.get('/products', (req, res) => {
    // console.log(req.query.search)
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term."
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title: 'Help Error',
        name: 'Eduardo Bulsoni',
        errorMessage: 'Help article not found'       
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        name: 'Eduardo Bulsoni',
        errorMessage: 'Page not found'     
    })
})

app.listen(port , () => {
    console.log('Server is up on port ' + port)
})