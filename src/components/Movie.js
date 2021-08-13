import React from "react";
import IMAGE_NOT_FOUND from "../images/not-found.png";

const Movie = (props) => {
  const {
    id,
    original_title,
    release_date,
    overview,
    popularity,
    poster_path,
  } = props.data;

  return (
    <div className="card" key={id}>
      <img
        className="card--image"
        src={
          poster_path
            ? `http://image.tmdb.org/t/p/w500${poster_path}`
            : IMAGE_NOT_FOUND
        }
        alt="poster_img"
      ></img>
      <h2 className="card--title">{original_title}</h2>
      <p>RELEASE DATE: {release_date}</p>
      <p>RATING: {popularity}</p>
      <p>{overview}</p>
    </div>
  );
};

export default Movie;
