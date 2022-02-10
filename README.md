# Express Learning

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
