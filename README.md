# Node.js HTTP Server vs. Express Framework

## Node.js HTTP Server

### Code Explanation
The provided code demonstrates a basic HTTP server setup using Node.js's built-in `http` module. It sets up a server that listens on port 4000. When a request is made to the server, it responds with different messages based on the requested URL or method.

    const server = http.createServer((request, response) => {
        console.log(request.method); //Method indicates that type of request method has been made.
        
        if(request.url == '/')
            response.end("Jai Shree Ram.");
        else if(request.url == '/cars')
            response.end("Rolls Royce   Lamborghini     Audi    Bmn");
        else
            response.end("Har Har Mahadev");
    });
    const PORT = 4000;

    server.listen(PORT, ()=>{
        //Once the server is statrted then this callback is executed.
        console.log("Server Running at port:",PORT);
    });

### Modules Used
- **http**: A core module in Node.js that allows creating HTTP servers and handling HTTP requests and responses.

### Function Explanation
- **http.createServer()**: Creates an HTTP server instance. It takes a callback function that gets invoked every time a request is made to the server.
- **request**: Represents the incoming HTTP request.
- **response**: Represents the server's response to the client's request.
- **response.end()**: Sends the HTTP response to the client. It is called to end the response process and sends the specified data.

## Express Framework

### Code Explanation
The provided code demonstrates the usage of Express, a minimalist web framework for Node.js. It also sets up a server listening on port 4000. Express simplifies the process of defining routes and handling requests compared to the native Node.js HTTP module.

    app.get("/", (req, res) => {
        res.send("Jai Shree Ram");
    });

    app.get("/cars", (req, res) => {
        res.send("Rolls Royce   Lamborghini     Audi    Bmn");
    });

    app.patch('/patch', (req, res) =>{
        res.send("This was a Patch request method hit.");
    })

    app.post("/post", (req, res) => {
        res.json({
            success : true,
            message : "A successful post method request got hit.",
            data : "Tried to passed the data in json format"
        });
    })
    //can even send a html response.

    app.listen(PORT, ()=>{
        console.log("Server has Started at the Port:",PORT);
    });

### Modules Used
- **express**: A web application framework for Node.js, designed for building web applications and APIs.

### Function Explanation
- **express()**: Creates an Express application. It returns an instance of the Express application that can be used to configure routes and middleware.
- **app.get(), app.patch(), app.post()**: Define route handlers for different HTTP request methods (`GET`, `PATCH`, `POST`). These methods specify how the server should respond when a request with a matching URL and method is received.
- **req**: Represents the HTTP request sent by the client.
- **res**: Represents the HTTP response to be sent to the client.
- **res.send()**: Sends a response to the client with the specified data.
- **res.json()**: Sends a JSON response to the client.
- **app.listen()**: Binds and listens for connections on the specified host and port. It starts the Express server.

### Additional Notes
- Express provides a more concise and structured way to handle HTTP requests compared to the native Node.js HTTP module.
- Express simplifies routing and middleware handling, making it easier to develop web applications and APIs.
