import React from "react";
import Movie from "./Movie";

const MovieList = () => {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  const movies = fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query='Fight Club'`
  )
    .then((result) => result.json())
    .then((data) => console.log(data));

  return (
    <div className="card-list">
      <Movie />
    </div>
  );
};

export default MovieList;
