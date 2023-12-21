import React, { useEffect } from "react";
import FilmItem from "./FilmItem";

function Movie(props) {
  // useEffect hook to log movies 
  useEffect(() => {
    console.log("movies ", props.myMovies);
  }, []);

  // Check if props.myMovies is an array
  if (!Array.isArray(props.myMovies)) {
    // Log an error if it's not an array
    console.error("props.myMovies is not an array");
    // Return null to render nothing in this case
    return null;
  }

  return (
    <div>
      <h1>Test</h1>
      {/* Map over the array and render FilmItem components */}
      {props.myMovies.map((movie) => (
        <FilmItem myMovies={movie} key={movie.filmLength}></FilmItem>
      ))}
    </div>
  );
}

export default Movie;

