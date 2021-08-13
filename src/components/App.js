import React from "react";
import Movie from "./Movie";
import NavBar from "./NavBar";
import Title from "./Title";

function App() {
  return (
    <div className="container">
      <Title />
      <NavBar />
      <Movie />
    </div>
  );
}

export default App;
