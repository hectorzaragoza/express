
const express = require('express')
const app = express()
const helmet = require('helmet')

// Helmet secures express APPs to some common vulnerabilities
// by setting various HTTP headers. (require and call, that's it.)
app.use(helmet())
// Serve static files
app.use(express.static('public'))
// Req.body is there because .json() is creating the req.body object in addition to other stuff
app.use(express.json())
// This line allows us to parse the body payload!
// Because usually the content-type of a payload from the client side
// is sent as 'application/x-www-form-urlencoded'
app.use(express.urlencoded({extended: false}))

app.post('/ajax', (req, res) => {
    console.log("Request headers", req.headers)
    console.log("Req.body: ", req.body)
    // Any time you are responding with json...use this method!
    res.json("test")
})

app.listen(3000)