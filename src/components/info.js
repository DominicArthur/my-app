//info.js

import { useEffect, useState } from "react";
import Movie from "./Movie";
import axios from "axios"

function Info() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('https://search.imdbot.workers.dev/?q=Niram')
        .then((response) => {
            setMovies(response.data.movies);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    return(
        <div>
            <h2>Movie Page</h2>
            <Movie myMovies={data}></Movie>
        </div>
    );
}

export default Info;