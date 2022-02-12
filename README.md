# Express Learning

### What's Express?
- Express is a NodeJs Module. NodeJS is written in C to use JavaScript in the backend.
- is a Routing and Middleware web framework. Essentially a series of middleware function calls.

- Middleware functions are functions that have access to the request object(req), the response object(res), and the next middleware function in the application's request-response cycle.
** If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

Typically: You'll want to include the following middleware functions
1) express.static() to serve static files
2) express.json() to parse payloads
3) express.urlencoded() to parse payloads

The last two basically parse the data you are sending from the client to have access to it in a json format.

express() includes the following Methods:
- express.json() - It parses incoming requests with JSON payloads and is based on body-parser.
- express.static() - serves static files
- express.Router()
- express.urlencoded() - parses incoming requests with urlencoded payloads and is based on body-parser.

Data is transferred in Packets which is made up of 5 layers.
- Application (SNMP, HTTP, FTP)
- Transport Layer (TCP, UDP, port numbers)
- Network Layer (IP, routers)
- Link Layer (MAC, switches)
- Physical (cables)

There are different transport protocols. Most common one is TCP/IP.
- UDP
    - Lightweight
        - headers are small
    - Connectionless
    - Consistency
        - It will send data no matter what!
    - UDP is very fast!
    - Used in Real-Time stuff, multiplayer games...
        - Anything that needs to be fast but can be unreliable

- TCP (Transmission Control Protocol) (The one HTTP uses)
    - Connection-based (Three-way Handshake)
    - Reliable (waits, until connection is established)
    - in-order Packets
    - Congestion control (can intentionally introduce latency to avoid making things worse)

What is HTTP?
- HTTP is only connected when absolutely necessary. (Req-Res cycle, then closes, repeat)
- HTTP Verbs to do certain things between a client and a server.
- Stateless: There is no dialogue. Info is shared only for the life of the connection, afterwards, there is no state saved. Nobody remembers what was "said" in previous connections. (respond to one request, then done.)

Process:
- TCP establishes a connection (req-res)
- HTTP request comes in, connection terminates, http connection closes but TCP remains open. Client waits for server response. Server sends back response via own http connection, http connection closes, then TCP can close.
- HTTP Message consists of three things:
    - Start Line: Single line that describes the type of request on the way there and status on the way back. (Method, endpoint, protocol used)
        - Response: (protocol used, status code) 
    - Header: Specifies the request or describes the body in the form of key value pairs (Metadata)
        - content-type: text/html (for example)
    - Body: Content that is being sent across the network.
