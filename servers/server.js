// Uses MongoDB to save data

// Import required libraries
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express application
const app = express();
const PORT = 3000;

// Middleware to parse JSON data in request body
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/moviesLibrary', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the movie schema for MongoDB
const movieSchema = new mongoose.Schema({
    title: String,
});

// Create a MongoDB model based on the movie schema
const Movie = mongoose.model('Movie', movieSchema);

// API endpoint to add a movie to the library
app.post('/api/add-to-library', async (req, res) => {
    // Extract movie data from the request body
    const movieData = req.body.movieData;

    try {
        // Create a new movie instance using the Movie model
        const newMovie = new Movie(movieData);
        
        // Save the new movie to the MongoDB database
        await newMovie.save();

        // Respond with success JSON if the operation is successful
        res.json({ success: true });
    } catch (error) {
        // Log and respond with an error if there's an issue
        console.error(error);
        res.status(500).json({ error: 'Error' });
    }
});

// Start the Express server
app.listen(PORT, () => {
    console.log('Server is running');
});
