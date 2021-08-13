import React, { useState } from "react";

const NavBar = (props) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.fetchData(query);
  };

  return (
    <div className="form">
      <h3 className="label">MOVIE NAME</h3>
      <input
        value={query}
        className="input"
        placeholder="Search a movie..."
        onChange={handleChange}
        onKeyDown={(event) => event.key === "Enter" && handleClick(event)}
        onClick={(e) => e.target.setSelectionRange(0, e.target.value.length)}
      ></input>
      <button className="button" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default NavBar;
