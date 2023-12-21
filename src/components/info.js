// info.js

import { useEffect, useState } from "react";
import Movie from "./Movie";  

// Functional component for the Movie Information page
function Info() {
    // State variable to store movie data obtained from the API
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        // Fetch movie data from IMDb API using axios
        axios.get('https://search.imdbot.workers.dev/?q=Niram')
        .then((response) => {
            // Save the fetched movie data in the state variable
            setMovies(response.data.movies);
        })
        .catch((error) => {
            // Log any errors that occur during the API request
            console.log(error);
        })
    }, []);  

    // JSX structure for the Movie Information component
    return (
        <div>
            {/* Heading for the Movie Page */}
            <h2>Movie Page</h2>
            
            {/* Render the Movie component and pass the retrieved movie data */}
            <Movie myMovies={movies}></Movie>
        </div>
    );
}

// Export the Info component as the default export
export default Info;
