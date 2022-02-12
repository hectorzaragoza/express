const express = require('express')
const app = express()

// Express is two things: 1) Router 2) Middleware
// Middleware can hijack the req-res cycle to do something in between that cycle

// Middleware function is any function that has access to the req, res, next object

// Req --- MIDDLEWARE ---> Res
/*
1. Request comes in
2. Sometimes we need to validate the URLSearchParams
3. We need to interact with the DB
4. If there is a user payload, we need to parse it and store it
5. Res 

2-4 are all middleware functions
*/

function validateUser(req, res, next) {
    // Get info out of the object (params, body)
    // May do some things with the DB
    res.locals.validated = true
    console.log("Validated Ran!")
    // If you dont call next, you have terminated the cycle of middleware that runs on the req-res cycle
    next()
}

// Tell express to use validateUser at the application level,
// runs on ALL paths and ALL methods
app.use(validateUser)
// If you only wanted to "use" validateUser on a certain url endpoint
// You can include the path before the function in app.use.
// This runs only on /admin for ALL methods
// app.use('/admin', validateUser)
// This runs only on / and only for GET method.
// app.get('/', validateUser)

app.get('/', (req, res, next) => {
    res.send("<h1>Home Page!</h1>")
    console.log(res.locals.validated)
})

app.listen(3000)