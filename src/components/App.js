import React from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import Title from "./Title";

function App() {
  return (
    <div className="container">
      <Title />
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
