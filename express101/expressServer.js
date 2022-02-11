// NodeJS is the language
// Express is a node module
// http is a native module while express is a third-party module
// const express = require('express')
// // An app is the express function createApplication inside the express module
// // Invoked and is an Express application
// const app = express()
// // Takes 2 args: 1) route, 2) callback if route is requested
// app.all('*', (req,res)=> {
//     res.send("<h1>This is the home page</h1>")
// })
// // Express handles the basic headers (status code, mime-type)
// // Express handles the end. You have to deal with the in-between

// app.listen(3000)

// BASIC ROUTING IN EXPRESS //

const express = require('express')
const app = express()
const path = require('path')
// Serve up static files
app.use(express.static('public'))
// APP has HTTP verb as methods (CRUD/REST)
// GET (READ)/POST (CREATE)/DELETE (DELETE) /PUT (UPDATE) (GET is the default for all browsers)
// Each of these methods, take 2 args, a path, and a callback to run if an HTTP request
// That matches THIS verb is made to the path.
app.all('/', (req, res)=> {
    console.log(path.join(__dirname, + "/node.html"))
    res.sendFile(path.join(__dirname, + "/node.html"))
})


app.listen(3000, ()=> {
    console.log('We are listening on port 3000')
})