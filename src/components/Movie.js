import React from "react";

const Movie = (props) => {
  console.log(props.data);
  return (
    <div className="card">
      <img
        className="card--image"
        src="http://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
      ></img>
      <h2 className="card--title">Title</h2>
      <p>RELEASE DATE: xxxx</p>
      <p>RATING: xx</p>
      <p>A wealthy entrepeneur secretly creates a theme park...</p>
    </div>
  );
};

export default Movie;
