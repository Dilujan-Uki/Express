const http = require('http');
//fetch the express module
const express = require('express');
const app = express();

app.use((req, res, next)=>{
    console.log("This is first middelware");
    next();
});

app.use((req, res, next)=>{
    console.log("This is second middelware");
    res.send("<h1>I am Dilujan</h1>");
})

//Let's create a server
const server = http.createServer(app);
server.listen(3001);
