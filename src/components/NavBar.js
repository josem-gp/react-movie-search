import React, { useState } from "react";

const NavBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setQuery();
  };

  return (
    <div className="form">
      <h3 className="label">MOVIE NAME</h3>
      <input
        value={query}
        className="input"
        placeholder="Search a movie..."
        onChange={handleChange}
      ></input>
      <button className="button">Search</button>
    </div>
  );
};

export default NavBar;
