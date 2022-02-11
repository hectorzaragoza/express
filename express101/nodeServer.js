// Creating an http server
// http module is a built-in nodejs module.
const http = require('http')
// Creating a server using the createServer method that takes a callback function and two args: req,res
// This is the file system, gives access to this computers file system
const fs = require('fs')
const server = http.createServer((req, res)=> {
    // console.log(req.url)
    // The request object has the url that was hit.
    if(req.url === '/') {
        // true? The user wants the base page ("home page")
        // console.log('This is the request object', req)
        // res = our way of responding to the request
        // http message: 1) start line 2) header 3) body
        res.writeHead(200, {'content-type': "text/html"})
        // writeHead takes 2 args: 1) status code 2) object for the mime-type
        // res.write('<h1>Home Page!</h1>')
        // // this writes to the DOM
        const homePageHTML = fs.readFileSync('node.html')
        res.write(homePageHTML)
        res.end()
        // Ends response to request
    } else if (req.url === '/node.png') {
        res.writeHead(200, {'content-type': "image/png"})
        const image = fs.readFileSync('node.png')
        res.write(image)
        res.end()
    } else if (req.url === '/styles.css') {
        res.writeHead(200, {'content-type': "text/css"})
        const css = fs.readFileSync('styles.css')
        res.write(css)
        res.end()
    } else {
        res.writeHead(404, {'content-type': "text/html"})
        res.write("<h1>Not what you're looking for!!</h1>")
        res.end()
    }
})
// This servers callback function will be called whenever the port 3000 is hit with an http verb.

// Create Server returns an object with a listen method, listen takes 1 arg, port to listen on.
server.listen(3000)