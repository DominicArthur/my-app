import React, { useEffect, useState } from "react";
import FilmItem from "./FilmItem";
import axios from "axios";
import Movies from "./films";

function Movie(props) {

  const [data, setData] = useState([]);
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

  const Reload = (i)=>{
    axios.get("http://localhost:4000/api/movies")
    .then(
      (response) =>{
        SVGMetadataElement(response.data)
      }
    )

    .catch(
      (error)=>{
        console.log(error);
      }
    )
  }

  return (
    <div>
      <h2>Movie Component</h2>
      <Movies myMovies={data} ReloadData={Reload}></Movies>
    </div>
  );
}

export default Movie;

