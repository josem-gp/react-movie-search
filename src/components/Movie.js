import React from "react";
import IMAGE_NOT_FOUND from "../images/not-found.png";

const Movie = (props) => {
  const { original_title, release_date, overview, popularity, poster_path } =
    props.data;

  return (
    <div className="card">
      <img
        className="card--image"
        src={
          poster_path
            ? `http://image.tmdb.org/t/p/w500${poster_path}`
            : IMAGE_NOT_FOUND
        }
        alt="poster_img"
      ></img>
      <h3 className="card--title">{original_title}</h3>
      <p className="small">RELEASE DATE: {release_date}</p>
      <p className="small">RATING: {popularity}</p>
      <p>{overview}</p>
    </div>
  );
};

export default Movie;
