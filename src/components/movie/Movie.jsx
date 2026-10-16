import React from "react";
import "./Movie.css";

function Movie({ Title, Poster, Year }) {
  return (
    <>
      <div className="movie-card">
        <div className="movie-card--wrapper">
          <img className="movie-card--img" src={Poster} alt="" />
        </div>
        <div className="movie-card--info">
          <span className="movie-card--year">{Year}</span>
          <h3 className="movie-card--title">{Title}</h3>
        </div>
      </div>
    </>
  );
}

export default Movie;
