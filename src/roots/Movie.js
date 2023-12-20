import React, { Component } from "react";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], // Array to store movie data
      isLoaded: false, // Flag to track whether data has loaded
    };
  }

  componentDidMount() {
    // Use the search endpoint for multiple movies
    fetch('https://www.omdbapi.com/?s=avengers&apikey=5546d1ae') 
      .then(res => res.json()) // Convert the response to JSON format
      .then(json => {
        this.setState({
          isLoaded: true, // Set isLoaded to true after data is fetched
          movies: json.Search, // Update 'movies' state with search results
        });
      })
      .catch(error => console.error('Error fetching data:', error)); // Log an error if fetch fails
  }

  render() {
    const { isLoaded, movies } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>; // Display loading message if data is not loaded
    } else {
      return (
        <div>
          <ul>
            {movies.map(movie => (
              <li key={movie.imdbID}>
                {movie.Title} | {movie.Year}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Movie;
