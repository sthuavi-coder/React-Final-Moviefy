import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function MovieInfo() {
  const { movies, id } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  async function getMovieData() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=b04c8fbe&plot=full&i=${id}`,
    );

    setMovie(data);
  }

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <div className="movie-page--wrapper">
        <div className="btn-wrapper">
        <button className="info-btn" onClick={() => navigate(-1)}>
          Back
        </button>
        </div>
        {movie && (
          <div className="movie-info--container">
          
            <div className="movie-info--media">
              <img
                className="movie-info--img"
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://placeholder.com"
                }
                alt={movie.Title}
              />
            </div>

            
            <div className="movie-info--desc">
              <h1 className="desc-title">{movie.Title}</h1>

              <div className="desc-tags">
                <span className="desc-tag rating"><i class="fa-solid fa-star"></i> {movie.imdbRating}</span>
                <span className="desc-tag box-office">
                  <i class="fa-solid fa-coins"></i> {movie.BoxOffice}
                </span>
                <span className="desc-tag genre">
                  <i class="fa-solid fa-masks-theater"></i> {movie.Genre}
                </span>
              </div>

              <p className="desc-para">{movie.Plot}</p>

              <div className="desc-details-grid">
                <div className="grid-item">
                  <span className="grid-label">Director</span>
                  <span className="grid-value">{movie.Director}</span>
                </div>
                <div className="grid-item">
                  <span className="grid-label">Actors</span>
                  <span className="grid-value">{movie.Actors}</span>
                </div>
                <div className="grid-item">
                  <span className="grid-label">Awards</span>
                  <span className="grid-value">{movie.Awards}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MovieInfo;
