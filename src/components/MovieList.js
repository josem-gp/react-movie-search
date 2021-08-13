import React from "react";
import Movie from "./Movie";

const MovieList = () => {
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  const movies = fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query='Fight Club'`
  )
    .then((result) => {
      if (!result.ok) {
        throw Error("Error: Could not fetch data for that resource");
      }
      result.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  return (
    <div className="card-list">
      <Movie />
    </div>
  );
};

export default MovieList;
