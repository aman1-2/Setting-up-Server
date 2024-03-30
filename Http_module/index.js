/*Nodejs provide us some support to setup our server's although its not very verbos but then
for Knowledge let's have a Look on it.
And this is done by in-built node module without the use of any extra external package or framework


Using http module (inbuilt given by node) can setup a basic server.*/
const http = require('http');

/*Http module contains a function called as createServer
This createServer function is going to take a callback as the input
Now inside the callback, we get two arguments
    - request -> This argument contains all the details about the incoming req.
    - response -> This argument contains functions using which we can prepare responses.

This createServer function is going to return us the server object.*/
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

/*Here a lot of things we have to do yourself but can make your life easier by using a framework
express which does a lot of work for us by default.*/