// Home.js

import { useState } from "react";

 function Home(){

  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [director, setDirector] = useState('');

  const handleSubmit = (i) => {
    i.preventDefault();

    console.log(title, poster, director);
  }

  return(
    <div>
      <form submit={handleSubmit}>
        <div className="my-form-group">
        <label>Movie Title: </label>
        <input type="text"
         className="my-form-control" 
          value={title}
          onChange={(i) => { setTitle(i.target.value) }}
          />
          </div>
          <div className="my-from-group"> 
          <label>Movie Poster: </label>
          <input type="text"
            className="my-form-control"
            value={poster}
            onChange={(i) => { setPoster(i.target.value) }}
    	    />
          </div>
          <div className="my-form-group">
            <label>Director's Name: </label>
            <input type="text"
              className="my-form-control"
              value={director}
              onChange={(i) => {setDirector(i.target.value) }}
            />
          </div>
          <input type="submit" value="Add Movie"></input>
      </form>
    </div>
  )
 }
export default Home;