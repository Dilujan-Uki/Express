const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const studentRoute = require('./routes/studentRoute');
const app = express();
app.use(bodyParser.urlencoded());
app.use(studentRoute);


app.use('/home', (req, res,next) => {
    res.send(`
        <h1>Welcome to Express JS</h1>
        <h1>This is home page</h1>
        <a href="/add-student">Click Here to Add Student</a>
    `);
  
});

app.use((req, res, next)=>{
    console.log("404 Erro")
    res.send(`<h1>404 Page not found</h1>`);
})

// create server
const server = http.createServer(app);
server.listen(3001, () => {
    console.log("Server running on port 3001");
});
