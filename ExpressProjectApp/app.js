const supabaseClient = require('@supabase/supabase-js')

const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

const supabaseUrl = 'https://mkhpfrsjwvuqkacikfmv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raHBmcnNqd3Z1cWthY2lrZm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5Nzg0MzUsImV4cCI6MjAzMTU1NDQzNX0.fmndN_xz97i40jCZy7OKx5EGOE-x3r8ZT2_1sCGCqlw'
const supabase = supabaseClient.createClient(supabaseUrl,supabaseKey)

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