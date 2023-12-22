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

  const Reload = () =>{
    axios.get("http://localhost:4000/api/movies")
    .then(
      (response) =>{
        setData(response.data)
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

