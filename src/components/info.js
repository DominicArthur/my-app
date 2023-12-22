// info.js

import { useEffect, useState } from "react";
import Movie from "./Movie";  
import axios from "axios";

// Functional component for the Movie Information page
function Info() {
    // State variable to store movie data obtained from the API
    const [movies, setMovies] = useState([]);

    
    useEffect(() => {
        // Fetch movie data from IMDb API using axios
        axios.get('http://localhost:4000/api/movies')
        .then((response) => {
            // Save the fetched movie data in the state variable
            setMovies(response.data);
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
            <Movie myMovies={data}></Movie>
        </div>
    );
}

// Export the Info component as the default export
export default Info;
