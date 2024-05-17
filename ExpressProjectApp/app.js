const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile('public/377-final-homePage.html', {root: __dirname})
})

app.get('/mission', (req, res) => {
    res.header('Content-Type', 'application/json')
    var word = {
        'mission':'Our mission is to have weather information be ready and easily accessible for University of Maryland, College Park students.'
    }
    res.send(JSON.stringify(word))
})

app.get('/values', (req, res) => {
    res.header('Content-Type', 'application/json')
    var word = {
        'Accessibility':"Accessibility: We made sure this product is inclusive by design, with built-in accessibility features to make it easy for our users to use"
    }
    res.send(JSON.stringify(word))
})

app.get('/team', (req, res) => {
    res.header('Content-Type', 'application/json')
    var word = {
        'hi':'Hello'
    }
    res.send(JSON.stringify(word))
})



app.listen(port, () => {
    console.log(`Express app Listing on port ${port}`)
})