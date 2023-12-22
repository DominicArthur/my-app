const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

// Enable CORS (Cross-Origin Resource Sharing) middleware
app.use(cors());

// Set up CORS headers for handling cross-origin requests
app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Use body-parser middleware for handling JSON data in request body
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define a Movie Schema using mongoose
const movieSchema = new mongoose.Schema({
    title: String,
    poster: String,
    director: String  
});

// Connect to MongoDB using mongoose
main().catch(error => console.log(error));

async function main() {
    await mongoose.connect('mongodb+srv:Dom:Dominic192@127.0.0.1:27017/test');
}

// Create a mongoose model based on the movie schema
const movieLook = mongoose.model('my_movies', movieSchema);

// Handle POST request to '/api/movies'
app.post('/api/movies', (request, response) => {
  console.log(request.body);

  // Create a new movie using the mongoose model
  movieLook.create({
    title: request.body.title,
    poster: request.body.cover,
    director: request.body.director
  })
  .then(() => { 
    response.send("Movie Created");
  })
  .catch(() => { 
    response.send("Movie Failed to Create =(");
  });
});

// Define a route for the root URL
app.get('/', (request, response) => {
    response.send('Hello You');
});

// Handle GET request to '/api/movies'
app.get('/api/movies', async(request, response) => {
    // Retrieve all movies from the database
    let movies = await movieLook.find({});
    response.json(movies);
});

// Handle GET request to '/api/movie/:identifier'
app.get('/api/movie/:identifier', async (request, response) => {
    console.log(request.params.identifier);

    // Retrieve a specific movie by its identifier from the database
    let movie = await movieLook.findById(request.params.identifier);
    response.send(movie);
});

// Handle PUT request to '/api/movies'
app.put('/api/movies/:id', async (request, response) => {
    console.log("Update: " + request.params.id);

    // Update a movie by its ID using the request body data
    let movie = await movieLook.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true }
    );

    response.send(movie);
});

// Handle GET request to '/api/movie/:id'
app.get('/api/movie/:id', async (request, response) => {
    console.log(request.params.id);

    // Retrieve a movie by its ID from the database
    let movie = await movieLook.findById({ _id: request.params.id });
    response.send(movie);
});

app.delete('/api/movie/:id', async(request, response)=>{
    console.log('Deleting: '+request.params.id);
    let movie = await movieLook.findByIdAndDelete({_id:request.params.id});
    response.send(movie);
})

// Start the server on the specified port
app.listen(port, () => {
    console.log('Port is listening');
});
