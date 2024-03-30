const express = require('express'); //This returns a express function.

//Create an express app object by calling the express function.
const app = express();
const PORT = 4000;

//One of the easy part of using the express is we can set a request - response cycle efficiently and easy here.
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