import React, { useState, useEffect } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Fight Club");
  const [error, setError] = useState(null);

  useEffect(
    () =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
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
        }),
    []
  );

  const movieData = movies.map((el) => <Movie data={el} />);

  return (
    <div className="card-list">
      {error && <h1>{error}</h1>}
      {movieData}
    </div>
  );
};

export default MovieList;
