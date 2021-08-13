import React, { useState } from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import Title from "./Title";

function App() {
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = (query) => {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="${query}"`
    )
      .then((result) => {
        if (!result.ok) {
          throw Error("Error found! Couldn't connect");
        }
        return result.json();
      })
      .then((data) => {
        setMovies(data.results);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="container">
      <Title />
      <NavBar fetchData={fetchData} />
      <MovieList movies={movies} error={error} />
    </div>
  );
}

export default App;
