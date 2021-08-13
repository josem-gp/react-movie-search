import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;
  const [error, setError] = useState(null);

  const movies = fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query='Fight Club'`
  )
    .then((result) => {
      if (!result.ok) {
        throw Error("Error: Could not fetch data for that resource");
      }
      result.json();
    })
    .then((data) => {
      setError(null);
      console.log(data);
    })
    .catch((err) => setError(err.message));

  return (
    <div className="card-list">
      {error && <div>{error}</div>}
      <Movie />
    </div>
  );
};

export default MovieList;
