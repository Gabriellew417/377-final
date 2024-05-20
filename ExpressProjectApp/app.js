const supabaseClient = require('@supabase/supabase-js')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

const supabaseUrl = 'https://mkhpfrsjwvuqkacikfmv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raHBmcnNqd3Z1cWthY2lrZm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU5Nzg0MzUsImV4cCI6MjAzMTU1NDQzNX0.fmndN_xz97i40jCZy7OKx5EGOE-x3r8ZT2_1sCGCqlw'
const supabase = supabaseClient.createClient(supabaseUrl,supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('public/377-final-helpPage.html', {root: __dirname})
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

//Supabase 

app.get(`/ticket_data`, async(req, res) => {
    console.log("Attempting to GET ticket data.")

    const {data, error} = await supabase
        .from('tickets')
        .select('*')
        .order('date', {ascending: false})

    if(error) {
        console.log('Error')
    } else {
        res.send(data)
    }

})

app.post('/ticket_input', async(req, res) => {
    console.log("Adding Ticket Data.")
    console.log(req.body)
    var name = req.body.name;
    var date = req.body.date;
    var description = req.body.description;

    const {data, error} = await supabase
        .from('tickets')
        .insert({'name':name, 'date':date, 'description': description})
        .select()
    if(error) {
        console.log('Error')
    } else {
        res.send(data)
    }
})

app.listen(port, () => {
    console.log(`Express app Listing on port ${port}`)
})