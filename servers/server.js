const express = require('express')
const app = express()
const port = 4000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.post('/name', (request, response)=>{
    response.send("Hello "+ request.body.fname+" "+request.body.lname);
})

app.get()
