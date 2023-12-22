// Import the 'useState' hook from React
import { useState } from "react";
import axios from "axios";
import './Home.css'; // Import the CSS file

// Functional component for the Home page
function Home() {
  // State variables to store form input values
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [director, setDirector] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    console.log("Title:" + title +
      "Poster:" + poster +
      "Director:" + director);

    const movie = {
      title: title,
      poster: poster,
      director: director
    };

    axios.post('http://localhost:4000/api/movies', movie)
      .then()
      .catch();
  }

  // JSX structure for the Home component
  return (
    <div className="my-form-container">
      {/* Form for adding a new movie */}
      <form className="my-form" onSubmit={handleSubmit}>
        {/* Input field for movie title */}
        <div className="my-form-group">
          <label>Movie Title: </label>
          <input
            type="text"
            className="my-form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        {/* Input field for movie poster */}
        <div className="my-form-group">
          <label>Movie Poster: </label>
          <input
            type="text"
            className="my-form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}
          />
        </div>
        {/* Input field for director's name */}
        <div className="my-form-group">
          <label>Director's Name: </label>
          <input
            type="text"
            className="my-form-control"
            value={director}
            onChange={(e) => { setDirector(e.target.value) }}
          />
        </div>
        {/* Submit button */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

// Export the Home component as the default export
export default Home;
