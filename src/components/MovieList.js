import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  const movieData = props.movies.map((el) => <Movie data={el} key={el.id} />);

  return (
    <div className="card-list">
      {props.error && <h1>{props.error}</h1>}
      {movieData.length > 0 ? movieData : <h1>No movies found</h1>}
    </div>
  );
};

export default MovieList;
