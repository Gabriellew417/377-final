const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.header('Content-Type', 'application/json')
    var word = {
        'hi':'Hello'
    }
    res.send(JSON.stringify(word))
})

app.listen(port, () => {
    console.log(`Express app Listing on port ${port}`)
})