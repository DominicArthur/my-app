const express = require('express');
const app = express()
const port = 4000;
const cors = require('cors');

app.use(cors());
app.use(function(request, response, next) {
response.header("Access-Control-Allow-Origin", "*");
response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
response.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/movies', (request, response) => {
    console.log(request.body);
    response.send('Hello You')
})

app.get('/api/movies', (request, response) => {


    const movies = [
            {
                "title": "The Lord of the Rings: Fellowship of the Ring",
                "director": ["Peter Jackson"],
                "filmLenght": "2 hours and 58 minutes",
                "thumbnail": "/images/OIP.jpg",
                "categories": []
             },
             {
                "title": "Fantastic Mr. Fox",
                "director": ["Wes Anderson"],
                "filmLenght": "1 hour and 27 minutes",
                "thumbnail": "/images/jAFvXFcup7pQOyofJlxPr6rcFaa.jpg",
                "categories": []
             },
             {
                "title": "Jujutsu Kaisen 0",
                "director": ["Sunghoo Park"],
                "filmLenght": "1 hour and 52minutes",
                "thumbnail": "/images/OIP (1).jpg",
                "categories": []
             } 
        ];

        response.json({
            myMovies:movies,
            "MyNote":"Welcome Data"
        })
        
    })

    app.listen(port, ()=> {
        console.log('Port is listening')
    })


