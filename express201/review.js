/*
TCP/IP
- Have your client and server set up to talk to each other. Http rides the TCP channel. 
TRANSPORT LAYER creates about 65,000 ports. Some are reserved for specific uses. For the most part
Your choice can be arbitrary.

HTTP MESSAGE is made up of three things.

1) Start Line
--- Request: method, protocol, etc.
--- response: protocol, status code, etc

2) Headers
--- (in key value pairs, content-type, date, 

------BLANK LINE

3) body
--- the payload

NODE SERVER
- write headers
- write body
- can use the fs module (filesystem)
- close connection
- server.listen
- in callback function:
    - deal with req-res cycle with middleware functions.


201
- Middleware, any function that has access to req, res, next.
- next()  is the way to move a piece of middleware forward to the next middleware
- need .json() and .urlencoded to create the body and have access to it in json format.
- helmet() prevents some common hacking of headers that expose your app to attacks.
*/