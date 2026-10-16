import React, { useState } from "react";
import "./Home.css";
import cinema from "../../assets/undraw_cinema-at-home.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(input);
  };

  return (
    
      <div className="main">
        <div className="main-container">
          <div className="main-row">
            <div className="main-top">
              <div className="top-desc">
                <h2 className="top-title">
                  Find Your Next <span className="red">Favorite</span> Movie
                </h2>
                <p className="top-para">
                  Search through real-time global databases to track down cast
                  details, critical plot summaries, and box office scores
                  instantly.
                </p>
              </div>
              <div className="top-search">
                <form onSubmit={handleSubmit} className="top-form">
                  <input
                    type="text"
                    className="top-input"
                    placeholder="Type here..."
                    onChange={(event) => setInput(event.target.value)}
                  />
                  <button type="submit" className="top-btn">
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="main-bottom">
              <figure className="bottom-figure">
                <img src={cinema} alt="" className="bottom-img" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Home;
