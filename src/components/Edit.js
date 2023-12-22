import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(props) {
    // Extract movie ID from the route parameters
    let { id } = useParams();

    // State variables to hold movie details
    const [title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [director, setDirector] = useState("");

    // Access navigation functionality from React Router
    const navigate = useNavigate();

    // Fetch movie details when the component mounts
    useEffect(() => {
        // cmd cannot see server.js causing connection issues (screenshot of issue in wiki)
        axios.get('http://localhost:4000/api/movie/' + id)
            .then((response) => {
                // Set state with retrieved movie details
                setTitle(response.data.title);
                setPoster(response.data.poster);
                setDirector(response.data.director);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []); // Empty dependency array ensures this effect runs only once

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Create a new movie object with updated details
        const newMovie = {
            id: id,
            title: title,
            poster: poster,
            director: director
        };

        // Send a PUT request to update the movie
        axios.put('http://localhost:4000/api/movie/' + id, newMovie)
            .then((response) => {
                console.log(response.data);
                // Navigate to the movie list page after successful update
                navigate('/movie');
            });
    }

    return (
        <div>
            {/* Movie edit form */}
            <form onSubmit={handleSubmit}>
                <div className="my-form-group">
                    <label>Movie Title: </label>
                    {/* Input field for movie title */}
                    <input
                        type="text"
                        className="my-form-control"
                        value={title}
                        onChange={(i) => setTitle(i.target.value)}
                    />
                </div>
                <div className="my-form-group">
                    <label>Add Poster URL: </label>
                    {/* Input field for movie poster URL */}
                    <input
                        type="text"
                        className="my-form-control"
                        value={poster}
                        onChange={(i) => setPoster(i.target.value)}
                    />
                </div>
                <div className="my-form-group">
                    <label>Add Director's Name: </label>
                    {/* Input field for movie director */}
                    <input
                        type="text"
                        className="my-form-control"
                        value={director}
                        onChange={(i) => setDirector(i.target.value)}
                    />
                </div>
                <div className="my-form-group">
                    {/* Submit button */}
                    <input type="submit" value="Edit Movie" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
