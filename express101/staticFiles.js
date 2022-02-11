// Serving up Static Files like CSS, Images, JS, etc.

const express = require('express')
const app = express()
// App comes with a use method (how you use middleware)
// Use takes 1 arg (right now), the middleware you want to run
app.use(express.static('public'))
// This will allow us to serve static files inside the public directory
app.all('/', (req, res) => {
    res.sendFile()
})

app.listen(3000, ()=> {
    console.log("I am listening on Port 3000")
})