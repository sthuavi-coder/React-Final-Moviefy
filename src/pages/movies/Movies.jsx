import React, { useEffect, useState } from "react";
import "./Movies.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import Movie from "../../components/movie/Movie";
import axios from "axios";

function Movies() {
  const { movies } = useParams();

  const [movie, setMovie] = useState([]);

  async function fetchMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=b04c8fbe&s=${movies}`,
    );

    const movieData = data.Search;
    setMovie(movieData);
  }

  function filterMovies(filter) {
    if (filter === "NEWEST") {
      setMovie(movie.slice().sort((a, b) => b.Year - a.Year));
    } else if (filter === "OLDEST") {
      setMovie(movie.slice().sort((a, b) => a.Year - b.Year));
    }
  }
  filterMovies();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="movies-container">
        <div className="movie-top">
          <div className="top-left">
            <Link to="/">
              <button>
                <i class="fa-solid fa-arrow-left"></i> Back
              </button>
            </Link>
          </div>
          <div className="top-right">
            <h3 className="sort-title">Sort</h3>
            <select
              id="filter"
              defaultValue="DEFAULT"
              className="select-filter"
              onChange={(event) => filterMovies(event.target.value)}
            >
              <option value="DEFAULT" disabled>
                ...
              </option>
              <option value="NEWEST">Newest</option>
              <option value="OLDEST">Oldest</option>
            </select>
          </div>
        </div>
        <div className="movie-card--container">
          {movie
            .map((elem, index) => (
              <div className="movie-container">
                <Link
                  key={index}
                  to={`/movies/${elem.imdbID}`}
                  className="card-links"
                >
                  <Movie
                    Title={elem.Title}
                    Year={elem.Year}
                    Poster={elem.Poster}
                  />
                </Link>
              </div>
            ))
            }
        </div>
      </div>
    </>
  );
}

export default Movies;
