import React from "react";
import Movie from "./Movie";

const MovieList = () => {

    const movies = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${}`)

  return (
    <div className="card-list">
      <Movie />
    </div>
  );
};

export default MovieList;
